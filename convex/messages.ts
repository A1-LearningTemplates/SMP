import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";

export const getMessages = query({
  args: { paginationOpts: paginationOptsValidator, userId: v.id("users") },
  handler: async (ctx, args) => {
    const messages = await ctx.db
      .query("messages")
      .filter((q) =>
        q.or(
          q.eq(q.field("receiverId"), args.userId),
          q.eq(q.field("senderId"), args.userId)
        )
      )
      .order("desc")
      .paginate(args.paginationOpts);
    messages.page = await Promise.all(
      messages.page.map(async (message) => {
        // const user = await ctx.db.get(message.senderId);
        const receiver = await ctx.db.get(message.receiverId);
        // const mediaUrl = message?.media && (await ctx.storage.getUrl(message?.media));
        // message.media = mediaUrl || undefined;
        return { ...message, receiver: receiver || undefined };
      })
    );

    return messages;
  },
});
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
