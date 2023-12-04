import MessageForm from "./MessageForm";

const Messenger = () => {
  return (
    <div className=" h-screen w-full">
      <div className=" h-screen">
        <div className="absolute w-screen top-[20%] left-0 bottom-0 right-0 mx-auto shadow md:w-[80%] h-2/3 bg-slate-100 rounded grid grid-cols-4 gap-2">
          <div className="">
            <h1 className="text-2xl font-bold">Messenger</h1>
          </div>

          <div className="relative col-span-3">
            <MessageForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
