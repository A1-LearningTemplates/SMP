import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const generateUploadUrl = mutation({
  handler: async (ctx, args) => {
    const res = await ctx.storage.generateUploadUrl();
    return res;
  },
});
