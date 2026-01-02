import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Education entries for portfolio
 */
export const education = mysqlTable("education", {
  id: int("id").autoincrement().primaryKey(),
  degree: varchar("degree", { length: 255 }).notNull(),
  institution: varchar("institution", { length: 255 }).notNull(),
  startDate: timestamp("startDate").notNull(),
  endDate: timestamp("endDate"),
  description: text("description"),
  order: int("order").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Education = typeof education.$inferSelect;
export type InsertEducation = typeof education.$inferInsert;

/**
 * Experience entries for portfolio
 */
export const experience = mysqlTable("experience", {
  id: int("id").autoincrement().primaryKey(),
  company: varchar("company", { length: 255 }).notNull(),
  position: varchar("position", { length: 255 }).notNull(),
  startDate: timestamp("startDate").notNull(),
  endDate: timestamp("endDate"),
  description: text("description"),
  order: int("order").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Experience = typeof experience.$inferSelect;
export type InsertExperience = typeof experience.$inferInsert;

/**
 * Research projects for portfolio
 */
export const research = mysqlTable("research", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  professor: varchar("professor", { length: 255 }),
  startDate: timestamp("startDate").notNull(),
  endDate: timestamp("endDate"),
  description: text("description"),
  order: int("order").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Research = typeof research.$inferSelect;
export type InsertResearch = typeof research.$inferInsert;

/**
 * Projects for portfolio
 */
export const projects = mysqlTable("projects", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  detailedDescription: text("detailedDescription"),
  role: varchar("role", { length: 255 }),
  order: int("order").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Project = typeof projects.$inferSelect;
export type InsertProject = typeof projects.$inferInsert;

/**
 * Technologies/tags for projects
 */
export const projectTechnologies = mysqlTable("projectTechnologies", {
  id: int("id").autoincrement().primaryKey(),
  projectId: int("projectId").notNull(),
  technology: varchar("technology", { length: 255 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ProjectTechnology = typeof projectTechnologies.$inferSelect;
export type InsertProjectTechnology = typeof projectTechnologies.$inferInsert;

/**
 * Skills for portfolio
 */
export const skills = mysqlTable("skills", {
  id: int("id").autoincrement().primaryKey(),
  category: varchar("category", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  proficiency: int("proficiency").default(50).notNull(), // 0-100 scale
  order: int("order").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Skill = typeof skills.$inferSelect;
export type InsertSkill = typeof skills.$inferInsert;

/**
 * Portfolio metadata
 */
export const portfolio = mysqlTable("portfolio", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  about: text("about"),
  resumeUrl: varchar("resumeUrl", { length: 1024 }),
  instagramUrl: varchar("instagramUrl", { length: 1024 }),
  linkedinUrl: varchar("linkedinUrl", { length: 1024 }),
  githubUrl: varchar("githubUrl", { length: 1024 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Portfolio = typeof portfolio.$inferSelect;
export type InsertPortfolio = typeof portfolio.$inferInsert;
