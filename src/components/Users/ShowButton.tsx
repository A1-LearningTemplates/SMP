type UsersProps = {
  fadeIn: boolean;
  toggleClassName: () => void;
};
const ShowButton = ({ fadeIn, toggleClassName }: UsersProps) => {
  return (
    <>
      {!fadeIn && (
        <div className="fixed w-12 h-12 z-10 text-center top-20 right-3">
          <button
            className=" absolute  bg-green-400 w-full h-full rounded-full animate-ping z-10"
            onClick={toggleClassName}
          >
            chat
          </button>
          <span className="relative inline-flex items-center justify-center z-0 rounded-full w-full h-full bg-green-400/[.80]">
            chat
          </span>
        </div>
      )}
    </>
  );
};

export default ShowButton;
