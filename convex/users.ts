import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
export const authenticate = mutation({
  args: {
    email: v.string(),
    picture: v.string(),
    nickname: v.string(),
  },
  handler: async (ctx, args) => {
    const { email, picture, nickname } = args;
    const user = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", email))
      .unique();
    if (user) {
      await ctx.db.patch(user._id, { is_active: true });
      return user._id;
    } else {
      const userId = await ctx.db.insert("users", {
        email,
        is_active: true,
        picture,
        nickname,
      });
      return userId;
    }
  },
});

export const updateVisibility = mutation({
  args: { id: v.id("users") },
  handler: async (ctx, args) => {
    const { id } = args;
    // console.log(await ctx.db.get(id));
    await ctx.db.patch(id, { is_active: false });
  },
});

export const gesUsers = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db
      .query("users")
      .order("asc")
      .collect();

    return users;
  },
});
