import Post from "./Post";
import Header from "./Header";
import { usePaginatedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
const Posts = () => {
  const { results, status, loadMore } = usePaginatedQuery(
    api.posts.getPosts,
    {},
    { initialNumItems: 5 }
  );
  console.log(results);

  if (!results.length) return <p>Loading Posts ..</p>;
  return (
    <div className="">
      {results?.map((post) => {
        const user = post?.user || null;
        return (
          <div key={post._id} className="my-10 shadow">
            <Header
              imgSrc={user?.picture}
              userName={user?.nickname}
              is_active={user?.is_active}
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
