import { mutation } from "./_generated/server";

export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    const res = await ctx.storage.generateUploadUrl();
    return res;
  },
});
