import MessageForm from "./MessageForm";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import UserAvatar from "../Users/UserAvatar";
import { useNavigate } from "react-router-dom";
const Messenger = () => {
  const users = useQuery(api.users.gesUsers);
  console.log(users);
  const navigate = useNavigate();
  const onUserClick = (userId: string) => {
    userId && navigate(userId);
  };
  return (
    <div className=" h-screen w-full ">
      <div className=" h-screen">
        <div className="absolute w-screen top-[20%] left-0 bottom-0 right-0 mx-auto shadow md:w-[80%] h-2/3 bg-slate-100 rounded grid grid-cols-4 gap-2 overflow-hidden">
          <div className="flex flex-col p-2 h-full items-start gap-2 bg-slate-50">
            <h2 className="text-2xl font-bold self-center">Online</h2>

            {users?.map((user) => (
              <UserAvatar user={user} onUserClick={onUserClick} />
            ))}
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
