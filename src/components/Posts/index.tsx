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
        const { user } = post;
        return (
          <div key={post._id} className="my-10 shadow">
            <Header
              imgSrc={user?.picture}
              userName={user?.nickname}
              date={post._creationTime}
            />
            <Post media={post.media} body={post.body} title={post.title} />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
