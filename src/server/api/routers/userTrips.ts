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
          createdAt: true,
        },
        where: {
          participants: {
            some: {
              id: ctx.session.user.id,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (error) {
      console.error("error", error);
    }
  }),

  /**
   * query to get all trip ids
   * used to check if a trip exists
   */
  getAllTripIds: protectedProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.trip.findMany({
        select: {
          id: true,
        },
      });
    } catch (error) {
      console.error("error", error);
    }
  }),

  /*
   * query to get a specific trip
   * @param tripId - id of the trip
   * @returns trip object
   */
  getSpecificTrip: protectedProcedure
    .input(z.object({ tripId: z.string().min(25).max(25) }))
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.trip.findUnique({
          select: {
            id: true,
            name: true,
            description: true,
            createdAt: true,
            startDate: true,
            endDate: true,
            adminId: true,
            participants: {
              select: {
                id: true,
                name: true,
              },
            },
          },
          where: {
            id: input.tripId,
          },
        });
      } catch (error) {
        console.error("error", error);
      }
    }),

  /**
   * query to get all participants of a trip
   * @param tripId - id of the trip
   * @returns array of user ids
   */
  getTripParticipants: protectedProcedure
    .input(z.object({ tripId: z.string().length(25) }))
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.trip.findMany({
          select: {
            participants: {
              select: {
                id: true,
              },
            },
          },
          where: {
            id: input.tripId,
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

  /**
   * mutation to delete a trip
   * @param tripId - id of the trip
   */
  deleteTrip: protectedProcedure
    .input(z.object({ tripId: z.string().length(25) }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.trip.delete({
          where: {
            id: input.tripId,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),

  /**
   * mutation to add a participant to a trip
   * trip code is of length 25 characters
   * @param tripId - id of the trip (trip code in client)
   */
  addParticipant: protectedProcedure
    .input(z.object({ tripId: z.string().min(25).max(25) }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.trip.update({
          where: {
            id: input.tripId,
          },
          data: {
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
