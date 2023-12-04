import MessageForm from "./MessageForm";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import UserAvatar from "../Users/UserAvatar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Messenger = () => {
  const [show, setShow] = useState(false);
  const users = useQuery(api.users.gesUsers);
  console.log(users);
  const navigate = useNavigate();
  const onUserClick = (userId: string) => {
    userId && navigate(userId);
  };
  return (
    <div className=" h-screen w-full ">
      <div className="relative h-screen">
        <div className="absolute top-20 z-10 btn md:hidden">
          <button onClick={() => setShow(!show)}>back</button>
        </div>

        <div className="absolute w-screen top-[20%] left-0 bottom-0 right-0 mx-auto shadow md:w-[85%] h-2/3 bg-slate-100 rounded grid md:grid-cols-[200px,100%] overflow-hidden">
          <div
            className={`flex-col md:items-start p-2 h-full   gap-2 w-full md:w-48 bg-slate-50 ${
              show ? "hidden" : "flex"
            } `}
          >
            <h2 className="text-2xl font-bold self-center">Online</h2>
            <div className="flex flex-wrap gap-2">
              {users?.map((user) => (
                <UserAvatar user={user} onUserClick={onUserClick} />
              ))}
            </div>
          </div>
          <div className={`relative ${!show ? "hidden" : ""} `}>
            <h3>user name</h3>
            <MessageForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
