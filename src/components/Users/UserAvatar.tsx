import ActiveUser from "./ActiveUser";
export type UserInfo = {
  _id: string;
  picture: string;
  is_active: boolean;
  nickname: string;
};
type UserAvatarProps = {
  onUserClick: (user: UserInfo) => void;
  user: UserInfo;
};
const UserAvatar = ({ user, onUserClick }: UserAvatarProps) => {
  return (
    <div
      key={user._id}
      className="relative flex justify-center items-center cursor-pointer gap-2 p-2"
      onClick={() => onUserClick(user)}
    >
      <div className="relative flex justify-center items-center gap-2">
        <img
          className="w-10 h-10 rounded-full"
          src={user.picture}
          alt="User Image"
        />
        <ActiveUser is_active={user.is_active} />
      </div>

      <p className="font-bold">{user.nickname}</p>
    </div>
  );
};

export default UserAvatar;
