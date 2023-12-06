interface CardProps {
  src: string;
  title: string;
  content: string;
}
const Card = ({ src, title, content }: CardProps) => {
  return (
    <div className="flex flex-col gap-2 border m-2 shadow rounded">
      <div className="">
        <img className="w-full" src={src} alt={title} />
      </div>

      <div className="p-2">
        <h3 className="text-xl font-bold my-3">{title}</h3>

        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
/*
 */
