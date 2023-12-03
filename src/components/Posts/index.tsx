import Post from "./Post";
import Header from "./Header";
import { usePaginatedQueryPosts } from "./hooks";
const Posts = () => {
  const { posts, status, loadMore } = usePaginatedQueryPosts();
  if (!posts.length) return <p>Loading Posts ..</p>;
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
