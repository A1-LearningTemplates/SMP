import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { UserInfo } from "../Users/UserAvatar";
import { lazy, useContext, useState } from "react";
import { Id } from "../../../convex/_generated/dataModel";
import { UserContext } from "../../context";
import MessengerUser from "./MessengerUser";
const MessengerChat = lazy(() => import("./MessengerChat"));

const Messenger = () => {
  const [show, setShow] = useState(false);
  const users = useQuery(api.users.gesUsers);
  const { userId, setUserMessenger, userMessenger } = useContext(UserContext);
  const onUserClick = (user: UserInfo) => {
    setUserMessenger(user);
    togglePage();
  };
  const togglePage = () => {
    setShow(!show);
  };
  return (
    <div className=" h-screen w-full  overflow-hidden ">
      <div className="relative h-full ">
        <div className="absolute  z-10  md:hidden top-20 ">
          <button className="btn px-1" onClick={togglePage}>
            back
          </button>
        </div>

        <div className="relative pt-20 w-full shadow h-full bg-slate-100 rounded md:grid md:grid-cols-[200px,1fr]">
          <MessengerUser
            users={users as UserInfo[]}
            userId={userId as Id<"users">}
            onUserClick={onUserClick}
            show={show}
          />
          {userMessenger && (
            <MessengerChat
              show={show}
              nickname={userMessenger?.nickname}
              receiverId={userMessenger?._id}
              senderId={userId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Messenger;
