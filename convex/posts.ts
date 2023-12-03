import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { paginationOptsValidator, PaginationResult } from "convex/server";

export const getPosts = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    // const posts = await ctx.db.query("posts").order("desc").collect();

    const posts = await ctx.db
      .query("posts")
      .order("desc")
      .paginate(args.paginationOpts);
    posts.page = await Promise.all(
      posts.page.map(async (post) => {
        const user = await ctx.db.get(post.userId);
        return { ...post, user };
      })
    );
    return posts;
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
