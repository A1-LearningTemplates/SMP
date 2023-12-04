import ActiveUser from "./ActiveUser";

type UserAvatarProps = {
  openMessenger: () => void;
  user: {
    _id: string;
    picture: string;
    is_active: boolean;
    nickname: string;
  };
};
const UserAvatar = ({ user, openMessenger }: UserAvatarProps) => {
  return (
    <div
      key={user._id}
      className="relative flex justify-center items-center cursor-pointer gap-2 p-2"
      onClick={openMessenger}
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
