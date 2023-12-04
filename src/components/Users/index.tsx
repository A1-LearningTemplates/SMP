import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import { useState } from "react";

import ShowButton from "./ShowButton";
import { useNavigate } from "react-router-dom";
import UserAvatar from "./UserAvatar";

const Users = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const toggleClassName = () => {
    setFadeIn((prev) => !prev);
  };
  const navigate = useNavigate();
  const users = useQuery(api.users.gesUsers);
  const openMessenger = () => {
    console.log("Sss");
    navigate("/messenger");
  };
  if (!users) return <p>Loading Users ..</p>;
  return (
    <>
      <ShowButton fadeIn={fadeIn} toggleClassName={toggleClassName} />
      <div
        className={`fixed flex justify-end z-10 right-0 h-screen bg-opacity-75  transition-all ease-in-out duration-500 ${
          fadeIn ? "translate-x-0  w-full " : "translate-x-[400px] w-0"
        }`}
        onClick={toggleClassName}
      >
        <div className="flex flex-col p-2 h-full items-start bg-slate-400/[.50] gap-2 ">
          <h3 className="text-2xl self-center font-bold text-center pb-2 text-slate-900 border-b-2 border-slate-700 mb-4">
            online users
          </h3>
          {users?.map((user) => {
            return <UserAvatar openMessenger={openMessenger} user={user} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Users;
