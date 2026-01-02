import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { getPortfolioMetadata, getEducation, getExperience, getResearch, getProjects, getSkillsByCategory } from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  portfolio: router({
    getMetadata: publicProcedure.query(async () => {
      return await getPortfolioMetadata();
    }),
    
    getEducation: publicProcedure.query(async () => {
      return await getEducation();
    }),
    
    getExperience: publicProcedure.query(async () => {
      return await getExperience();
    }),
    
    getResearch: publicProcedure.query(async () => {
      return await getResearch();
    }),
    
    getProjects: publicProcedure.query(async () => {
      return await getProjects();
    }),
    
    getSkills: publicProcedure.query(async () => {
      return await getSkillsByCategory();
    }),
  }),
});

export type AppRouter = typeof appRouter;
