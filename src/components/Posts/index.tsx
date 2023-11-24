import Post from "./Post";
import Header from "./Header";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
// import { useEffect, useState } from "react";
const Posts = () => {
  const posts = useQuery(api.posts.getPosts);
  /*   const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {};
  }, []); */

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
