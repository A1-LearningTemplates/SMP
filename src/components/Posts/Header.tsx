import moment from "moment";

type HeaderProps = {
  imgSrc: string | undefined;
  userName: string | undefined;
  date: number;
};

const Header = ({ imgSrc, userName, date }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-b from-slate-400 to-slate-200 rounded-t p-2 text-slate-800 ">
      <div className="relative flex justify-center items-center gap-2">
        <img
          className="w-10 h-10 rounded-full"
          src={
            imgSrc ||
            "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
          }
          alt=""
        />

        <p className="font-bold">{userName}</p>
      </div>
      <div>
        <small className="text-gray-900">
          {moment(date).format("dddd MMMM YYYY")}
        </small>
      </div>
    </div>
  );
};

export default Header;
