import React from "react";
import Post from "./Post";
import Header from "./Header";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
const Posts = () => {
  const posts = useQuery(api.posts.get);
  console.log();

  return (
    <div className="">
      {posts?.map((post) => {
        return (
          <section key={post.id} className="my-10 shadow">
            <Header />
            <Post media={post.media} body={post.body} />
          </section>
        );
      })}
    </div>
  );
};

export default Posts;
