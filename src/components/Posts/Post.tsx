interface PostProps {
  body: string;
  media: string;
}
const Post = ({ media, body }: PostProps) => {
  return (
    <div className="flex flex-col gap-4 p-4 border-slate-400">
      <div className="border-b-2 border-slate-500 py-4 ">
        <p>{body}</p>
      </div>
      <div className="w-full overflow-hidden ">
        <img className="rounded  m-auto" src={media} alt="" />
      </div>
    </div>
  );
};

export default Post;
