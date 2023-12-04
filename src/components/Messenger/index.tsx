import MessageForm from "./MessageForm";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import UserAvatar, { UserInfo } from "../Users/UserAvatar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Messages from "./Messages";
const Messenger = () => {
  const [show, setShow] = useState(false);
  const users = useQuery(api.users.gesUsers);
  const [activeUser, setActiveUser] = useState<UserInfo | null>(null);
  const onUserClick = (user: UserInfo) => {
    setActiveUser(user);
    togglePage();
    // userId && navigate(userId);
  };
  const togglePage = () => {
    setShow(!show);
  };
  return (
    <div className=" h-screen w-full ">
      <div className="relative h-screen">
        <div className="absolute top-20 z-10 btn md:hidden">
          <button onClick={togglePage}>back</button>
        </div>

        <div className="absolute w-full top-[20%] left-0 bottom-0 right-0 mx-auto shadow md:w-[85%] h-2/3 bg-slate-100 rounded grid md:grid-cols-[200px,100%] overflow-hidden">
          <div
            className={`flex-col md:items-start p-2 h-full md:flex  gap-2 w-full md:w-48 bg-slate-50 ${
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
          <div
            className={`${
              !show ? "hidden" : "grid"
            }  grid-rows-[40px,1fr,60px] md:grid`}
          >
            <div className="text-center bg-slate-50 my-auto ">
              <h3 className="text-xl font-bold py-2">
                Chat with <small>{activeUser?.nickname}</small>
              </h3>
            </div>

            <Messages />
            <MessageForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
