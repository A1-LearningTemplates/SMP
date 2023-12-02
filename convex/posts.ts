import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
export const getPosts = query({
  args: {},
  handler: async (ctx) => {
    const posts = await ctx.db.query("posts").order("desc").collect();

    return await Promise.all(
      (posts ?? []).map(async (post) => {
        const user = await ctx.db.get(post.userId);
        return { ...post, user };
      })
    );
  },
});
export const createPost = mutation({
  args: {
    title: v.string(),
    body: v.string(),
    media: v.string(),
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const postId = await ctx.db.insert("posts", {
      title: args.title,
      body: args.body,
      media: args.media,
      userId: args.userId,
    });
    return postId;
  },
});
