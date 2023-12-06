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
    <div className=" h-screen w-full ">
      <div className="relative h-screen">
        <div className="absolute top-20 z-10 btn md:hidden">
          <button onClick={togglePage}>back</button>
        </div>

        <div className="absolute w-full top-[20%] left-0 bottom-0 right-0 mx-auto shadow md:w-[85%] h-2/3 bg-slate-100 rounded grid md:grid-cols-[200px,100%] overflow-hidden">
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
