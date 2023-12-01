import Post from "./Post";
import Header from "./Header";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { setPosts } from "../../features/posts/postsSlice";
import { useEffect } from "react";
const Posts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const data = useQuery(api.posts.getPosts, posts.length ? "skip" : {});

  useEffect(() => {
    if (data) dispatch(setPosts(data));
  }, [data]);
  if (!posts.length) return <p>Loading ..</p>;
  return (
    <div className="">
      {posts?.map((post) => {
        return (
          <section key={post._id} className="my-10 shadow">
            <Header />
            <Post media={post.media} body={post.body} title={post.title} />
          </section>
        );
      })}
    </div>
  );
};

export default Posts;
