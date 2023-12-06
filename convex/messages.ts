import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";

export const getMessages = query({
  args: {
    paginationOpts: paginationOptsValidator,
    receiverId: v.id("users"),
    senderId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const messages = await ctx.db
      .query("messages")
      .filter((q) =>
        q.or(
          q.and(
            q.eq(q.field("receiverId"), args.receiverId),
            q.eq(q.field("senderId"), args.senderId)
          ),
          q.and(
            q.eq(q.field("receiverId"), args.senderId),
            q.eq(q.field("senderId"), args.receiverId)
          )
        )
      )
      .order("asc")
      .paginate(args.paginationOpts);
    messages.page = await Promise.all(
      messages.page.map(async (message) => {
        const receiver = await ctx.db.get(message.receiverId);
        const sender = await ctx.db.get(message.senderId);
        return {
          ...message,
          receiver: receiver || undefined,
          sender: sender || undefined,
        };
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
