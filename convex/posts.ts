import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
export const getPosts = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("posts").collect();
    // do something with `tasks`
  },
});
export const createPost = mutation({
  args: { title: v.string(), body: v.string() },
  handler: async (ctx, args) => {
    const postId = await ctx.db.insert("posts", {
      title: args.title,
      body: args.body,
    });
    return postId;
  },
});
