import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { LegacyRef, useEffect } from "react";
import { setUsers } from "../../features/users/userSlice";

type UsersProps = {
  divRef: LegacyRef<HTMLDivElement> | undefined;
};
const Users = ({ divRef }: UsersProps) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users);
  const data = useQuery(api.users.gesUsers, users.length ? "skip" : {});

  useEffect(() => {
    if (data) dispatch(setUsers(data));
  }, [data]);
  if (!users.length) return <p>Loading ..</p>;
  return (
    <div ref={divRef} className="flex">
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
  );
};

export default Users;
