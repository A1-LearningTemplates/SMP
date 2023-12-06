const ActiveUser = ({ is_active }: { is_active: boolean | undefined }) => {
  return (
    <>
      {!is_active ? (
        <span className="top-0 left-5 absolute w-3 h-3 bg-slate-500 border-2 rounded-full"></span>
      ) : (
        <span className="top-0 left-5 absolute flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
        </span>
      )}
    </>
  );
};

export default ActiveUser;
