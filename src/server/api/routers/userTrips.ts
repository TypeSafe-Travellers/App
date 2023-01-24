import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userTripsRouter = createTRPCRouter({
  /**
   * query to get all trips
   * only query trips which the user has created or participated in
   */
  getAll: protectedProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.trip.findMany({
        select: {
          id: true,
          name: true,
          description: true,
        },
        where: {
          participants: {
            some: {
              id: ctx.session.user.id,
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      });
    } catch (error) {
      console.error("error", error);
    }
  }),

  /**
   * mutation to create a new trip
   * @param name - name of the trip
   * @param description - description of the trip
   * @param startDate - start date of the trip
   * @param endDate - end date of the trip
   * @param adminId - id of the user who created the trip
   * @param participants - id of users who are participating in the trip
   */
  createTrip: protectedProcedure
    .input(
      z.object({
        name: z.string().min(3).max(50),
        description: z.string().min(3).max(1000),
        startDate: z.date(),
        endDate: z.date(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.trip.create({
          data: {
            name: input.name,
            description: input.description,
            startDate: input.startDate,
            endDate: input.endDate,
            adminId: ctx.session.user.id,
            participants: {
              connect: {
                id: ctx.session.user.id,
              },
            },
          },
        });
      } catch (error) {
        console.error(error);
      }
    }),
});
