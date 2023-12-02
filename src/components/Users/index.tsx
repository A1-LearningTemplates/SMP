import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { LegacyRef, useEffect } from "react";
import { setUsers } from "../../features/users/userSlice";

type UsersProps = {
  fadeIn: boolean;
  toggleClassName: () => void;
};
const Users = ({ fadeIn, toggleClassName }: UsersProps) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users);
  const data = useQuery(api.users.gesUsers, users.length ? "skip" : {});

  useEffect(() => {
    if (data) dispatch(setUsers(data));
  }, [data]);
  if (!users.length) return <p>Loading ..</p>;
  return (
    <div
      className={`fixed flex justify-end z-10 right-0 h-screen w-full bg-opacity-75 transition-all ease-in-out duration-500 ${
        fadeIn ? "translate-x-0" : "translate-x-[600px]"
      }`}
      onClick={toggleClassName}
    >
      <div className="flex flex-col w-44 p-2 h-full items-start  bg-slate-400/[.50] ">
        <h3>online users</h3>
        {users?.map((user) => {
          return (
            <div className="relative flex justify-center items-center gap-2">
              <div className="relative flex justify-center items-center gap-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.picture}
                  alt="User Image"
                />
                <span className="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
              </div>

              <p className="font-bold">{user.nickname}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
