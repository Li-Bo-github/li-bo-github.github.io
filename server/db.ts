import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, education, experience, research, projects, projectTechnologies, skills, portfolio } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Portfolio Content Queries

export async function getPortfolioMetadata() {
  const db = await getDb();
  if (!db) return null;
  
  const result = await db.select().from(portfolio).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function getEducation() {
  const db = await getDb();
  if (!db) return [];
  
  return await db.select().from(education).orderBy(education.order);
}

export async function getExperience() {
  const db = await getDb();
  if (!db) return [];
  
  return await db.select().from(experience).orderBy(experience.order);
}

export async function getResearch() {
  const db = await getDb();
  if (!db) return [];
  
  return await db.select().from(research).orderBy(research.order);
}

export async function getProjects() {
  const db = await getDb();
  if (!db) return [];
  
  const projectsList = await db.select().from(projects).orderBy(projects.order);
  
  // Fetch technologies for each project
  const projectsWithTech = await Promise.all(
    projectsList.map(async (project) => {
      const techs = await db
        .select()
        .from(projectTechnologies)
        .where(eq(projectTechnologies.projectId, project.id));
      return {
        ...project,
        technologies: techs.map(t => t.technology),
      };
    })
  );
  
  return projectsWithTech;
}

export async function getSkills() {
  const db = await getDb();
  if (!db) return [];
  
  return await db.select().from(skills).orderBy(skills.category, skills.order);
}

export async function getSkillsByCategory() {
  const db = await getDb();
  if (!db) return {};
  
  const allSkills = await db.select().from(skills).orderBy(skills.category, skills.order);
  
  const grouped: Record<string, typeof allSkills> = {};
  allSkills.forEach(skill => {
    if (!grouped[skill.category]) {
      grouped[skill.category] = [];
    }
    grouped[skill.category].push(skill);
  });
  
  return grouped;
}
