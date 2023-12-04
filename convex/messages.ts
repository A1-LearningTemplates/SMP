import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";

export const getMessages = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    const posts = await ctx.db
      .query("posts")
      .order("desc")
      .paginate(args.paginationOpts);
    posts.page = await Promise.all(
      posts.page.map(async (post) => {
        const user = await ctx.db.get(post.userId);
        const mediaUrl = post?.media && (await ctx.storage.getUrl(post?.media));
        post.media = mediaUrl || undefined;
        return { ...post, user: user || undefined };
      })
    );

    return posts;
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
