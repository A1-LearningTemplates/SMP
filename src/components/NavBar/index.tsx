import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { User, useAuth0 } from "@auth0/auth0-react";
import { MdLogout, MdLogin } from "react-icons/md";
import logo from "../../assets/SMP.png";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useEffect, useContext } from "react";

import { UserContext } from "../../context";
import { Id } from "../../../convex/_generated/dataModel";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { userId, removeUserId, setUserId } = useContext(UserContext);
  const authenticate = useMutation(api.users.authenticate);
  const updateVisibility = useMutation(api.users.updateVisibility);
  const { user, logout, loginWithRedirect, isAuthenticated } = useAuth0();

  const navigate = useNavigate();
  const handelLogin = () => {
    loginWithRedirect();
  };
  const handelLogout = async () => {
    await logout({
      logoutParams: { returnTo: window.location.origin },
    });
    await updateVisibility({ id: userId as Id<"users"> });
    removeUserId();
    navigate("/");
  };

  useEffect(() => {
    const handleAuth = async (user: User | undefined) => {
      try {
        const userId = await authenticate({
          email: user?.email || "",
          picture: user?.picture || "",
          nickname: user?.nickname || "",
        });
        setUserId(userId);
        navigate("/home");
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    };
    if (user) {
      handleAuth(user);
    }
  }, [user]);

  return (
    <header className="fixed top-0 left-0 bg-gradient-to-b from-slate-900 to-slate-400 h-16 shadow z-10">
      <nav className="w-screen px-2 flex justify-between items-center h-full md:px-24">
        <div
          className="w-28 cursor-pointer"
          onClick={() => navigate(isAuthenticated ? "/home" : "/")}
        >
          <img src={logo} alt="logo" />
        </div>
        <div className="flex justify-between items-center md:w-[50%] lg:w-[32%]">
          <Authenticated>
            <div className="hidden md:flex items-center">
              <img
                src={user?.picture}
                className="rounded-full h-10 mx-3"
                alt={user?.nickname}
              />
              <p className="flex flex-wrap gap-2 text-gray-300">
                <span>Hello,</span>
                <span>{user?.nickname}</span>
              </p>
            </div>

            <button className="btn" onClick={handelLogout}>
              <MdLogout />
            </button>
          </Authenticated>
          <Unauthenticated>
            <span className="text-gray-300">Discover our world</span>
            <button className="btn" onClick={handelLogin}>
              <MdLogin />
            </button>
          </Unauthenticated>
          <AuthLoading>
            <p>Loading..</p>
          </AuthLoading>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
