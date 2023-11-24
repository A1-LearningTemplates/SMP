interface PostProps {
  body: string;
  media: string;
  title: string | undefined;
}
const Post = ({ media, body, title }: PostProps) => {
  return (
    <div className="flex flex-col gap-4 p-4 border-slate-400">
      <div className="border-b-2 border-slate-500 py-4 ">
        <h4 className="text-lg font-bold text-slate-600 mb-4">{title}</h4>
        <p>{body}</p>
      </div>
      <div className="w-full overflow-hidden ">
        <img className="rounded  m-auto" src={media} alt="" />
      </div>
    </div>
  );
};

export default Post;
