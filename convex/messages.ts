import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const createMessage = mutation({
  args: {
    content: v.string(),
    media: v.string(),
    receiverId: v.id("users"),
    senderId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const messageId = await ctx.db.insert("messages", {
      content: args.content,
      media: args.media,
      receiverId: args.receiverId,
      senderId: args.senderId,
    });
    return messageId;
  },
});
