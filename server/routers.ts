import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { storagePut } from "./storage";
import { getDb } from "./db";
import { jobApplications } from "../drizzle/schema";
import { nanoid } from "nanoid";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
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

  careers: router({
    submitApplication: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          email: z.string().email(),
          phone: z.string().optional(),
          position: z.string().min(1),
          resumeBase64: z.string(), // Base64 encoded file
          resumeFilename: z.string(),
          resumeMimeType: z.string(),
          portfolioUrl: z.string().url().optional(),
          message: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");

        // Upload resume to S3
        const fileBuffer = Buffer.from(input.resumeBase64, "base64");
        const fileKey = `resumes/${nanoid()}-${input.resumeFilename}`;
        const { url: resumeUrl } = await storagePut(
          fileKey,
          fileBuffer,
          input.resumeMimeType
        );

        // Save to database
        await db.insert(jobApplications).values({
          name: input.name,
          email: input.email,
          phone: input.phone,
          position: input.position,
          resumeUrl,
          resumeKey: fileKey,
          portfolioUrl: input.portfolioUrl,
          message: input.message,
        });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
