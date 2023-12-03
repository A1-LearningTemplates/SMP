import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
export default defineSchema({
  users: defineTable({
    email: v.string(),
    is_active: v.boolean(),
    picture: v.string(),
    nickname: v.string(),
  }).index("by_email", ["email"]),
  posts: defineTable({
    body: v.optional(v.string()),
    media: v.optional(v.string()),
    title: v.string(),
    userId: v.id("users"),
    user: v.optional(
      v.object({
        _id: v.id("users"),
        email: v.string(),
        is_active: v.boolean(),
        picture: v.string(),
        nickname: v.string(),
        _creationTime: v.number(),
      })
    ),
  }),
});
