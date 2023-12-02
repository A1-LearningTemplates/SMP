import Post from "./Post";
import Header from "./Header";

import { api } from "../../../convex/_generated/api";

import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { setPosts } from "../../features/posts/postsSlice";
import { useEffect } from "react";
import { usePaginatedQuery } from "convex/react";
const Posts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  // const data = useQuery(api.posts.getPosts, posts.length ? "skip" : {});
  const { results, status, loadMore } = usePaginatedQuery(
    api.posts.getPosts,
    {},
    { initialNumItems: 5 }
  );

  useEffect(() => {
    if (results && status !== "LoadingMore") dispatch(setPosts(results));
    return () => console.log("unmount");
  }, [results]);
  if (!posts.length || status === "LoadingMore") return <p>Loading Posts ..</p>;
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
      <button onClick={() => loadMore(5)} disabled={status !== "CanLoadMore"}>
        Load More
      </button>
    </div>
  );
};

export default Posts;
