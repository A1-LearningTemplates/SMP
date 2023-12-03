import { api } from "../../../convex/_generated/api";

import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { setPosts } from "../../features/posts/postsSlice";
import { useEffect } from "react";
import { usePaginatedQuery } from "convex/react";
export const usePaginatedQueryPosts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  // const data = useQuery(api.posts.getPosts, posts.length ? "skip" : {});
  const { results, status, loadMore } = usePaginatedQuery(
    api.posts.getPosts,
    {},
    { initialNumItems: 5 }
  );

  useEffect(() => {
    const handelSetPosts = () => {
      dispatch(setPosts(results));
    };
    if (results.length > posts.length) {
      handelSetPosts();
    }
    return () => console.log("unmount");
  }, [results]);

  return { posts, status, loadMore };
};
