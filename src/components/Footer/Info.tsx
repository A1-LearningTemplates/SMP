interface InfoProps {
  icon: JSX.Element;
  content: string;
}
const Info = ({ icon, content }: InfoProps) => {
  return (
    <div className="flex items-center gap-2 mt-4">
      <i className="rounded-full bg-slate-950 text-slate-200 p-2">{icon}</i>
      <span>{content}</span>
    </div>
  );
};

export default Info;
