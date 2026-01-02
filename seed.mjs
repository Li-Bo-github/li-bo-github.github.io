import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { portfolio, education, experience, research, skills } from './drizzle/schema.js';

const pool = mysql.createPool(process.env.DATABASE_URL);
const db = drizzle(pool);

async function seed() {
  try {
    console.log('Seeding portfolio data...');

    // Portfolio metadata
    await db.insert(portfolio).values({
      name: 'Bo Li',
      email: 'libo.tom.mail@gmail.com',
      about: "Hi, I'm interested in the field of supervised learning and autonomous driving. I am planning to work as a software engineer after graduation.",
      resumeUrl: 'https://drive.google.com/file/d/14sAVOhbl-99k0W4yKfSjSqlksUSSRNov/view?usp=drive_link',
      instagramUrl: 'https://www.instagram.com/limbolavida/',
      linkedinUrl: 'https://www.linkedin.com/in/bo-li-7b6a10105/',
      githubUrl: 'https://github.com/Li-Bo-github',
    });

    console.log('Portfolio metadata inserted');

    // Education
    await db.insert(education).values([
      {
        degree: 'Master of Computer Science',
        institution: 'University of Illinois Urbana-Champaign',
        startDate: new Date('2024-01-01'),
        endDate: new Date('2025-05-31'),
        description: 'Focused on machine learning and autonomous systems',
        order: 1,
      },
      {
        degree: 'B.S. Computer Science, Data Science',
        institution: 'University of Wisconsin-Madison',
        startDate: new Date('2019-09-01'),
        endDate: new Date('2023-05-31'),
        description: 'Strong foundation in computer science and data science principles',
        order: 2,
      },
    ]);

    console.log('Education data inserted');

    // Experience
    await db.insert(experience).values([
      {
        company: 'Tharzen',
        position: 'Software Engineer Internship',
        startDate: new Date('2024-05-01'),
        endDate: new Date('2024-08-31'),
        description: 'Designed and developed a reversible PHP interpreter based on bidirectional evaluation, leading Test-Driven Development (TDD) to ensure robust feature implementation and comprehensive testing.',
        order: 1,
      },
      {
        company: 'Spark Education Group',
        position: 'Software Engineer Internship',
        startDate: new Date('2023-08-01'),
        endDate: new Date('2023-12-31'),
        description: 'Led the deployment of a large language model platform using React, Node.js, Python, FastAPI, and PostgreSQL, contributing to a 30% increase in weekly active users.',
        order: 2,
      },
      {
        company: 'Amazon',
        position: 'Software Engineer Internship',
        startDate: new Date('2022-05-01'),
        endDate: new Date('2022-08-31'),
        description: 'Designed and implemented the backend API for the changelog function using Node.js and GraphQL, ensuring high performance and scalability.',
        order: 3,
      },
    ]);

    console.log('Experience data inserted');

    // Research
    await db.insert(research).values([
      {
        title: 'ClaimTrust – A Propagation-Based Trust Scoring Framework for Retrieval-Augmented Generation (RAG) Systems',
        professor: 'Heng Ji',
        startDate: new Date('2024-08-01'),
        endDate: new Date('2024-12-31'),
        description: 'Developed a graph-based trust scoring algorithm to evaluate document reliability, improving RAG system response quality by 11.2%.',
        order: 1,
      },
      {
        title: 'Simulation of the Collaborative Automated Driving Systems',
        professor: 'Bin Ran',
        startDate: new Date('2022-02-01'),
        endDate: new Date('2022-12-31'),
        description: 'Working with the prediction group focusing on trajectory prediction of autonomous driving cars.',
        order: 2,
      },
    ]);

    console.log('Research data inserted');

    // Skills
    await db.insert(skills).values([
      { category: 'Languages', name: 'Python', proficiency: 90, order: 1 },
      { category: 'Languages', name: 'JavaScript', proficiency: 85, order: 2 },
      { category: 'Languages', name: 'TypeScript', proficiency: 85, order: 3 },
      { category: 'Languages', name: 'Java', proficiency: 80, order: 4 },
      { category: 'ML Engineering', name: 'PyTorch', proficiency: 85, order: 1 },
      { category: 'ML Engineering', name: 'scikit-learn', proficiency: 85, order: 2 },
      { category: 'Web Development', name: 'React', proficiency: 90, order: 1 },
      { category: 'Web Development', name: 'Node.js', proficiency: 85, order: 2 },
    ]);

    console.log('Skills data inserted');
    console.log('Portfolio data seeded successfully!');
    
    await pool.end();
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seed();
