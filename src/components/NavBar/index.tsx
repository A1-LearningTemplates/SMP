import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { useAuth0 } from "@auth0/auth0-react";
import { MdLogout, MdLogin } from "react-icons/md";
import logo from "../../assets/SMP.png";
const NavBar = () => {
  const { user, logout, loginWithRedirect } = useAuth0();
  const handelLogin = () => {
    loginWithRedirect();
  };
  const handelLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <header className="fixed top-0 left-0 bg-gradient-to-b from-slate-900 to-slate-400 h-16 shadow z-10">
      <nav className="w-screen px-2 flex justify-between items-center h-full md:px-24">
        <div className="w-28">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex justify-between items-center md:w-[50%] lg:w-[32%]">
          <Authenticated>
            <div className="hidden md:flex items-center">
              <img src={user?.picture} className="rounded-full h-10 mx-3" />
              <p className="flex flex-wrap gap-2 text-gray-300">
                <span>Hello,</span>
                <span>
                  {user?.name?.substring(0, user?.name.indexOf(".")) ||
                    user?.name}
                </span>
              </p>
            </div>

            <button className="btn" onClick={handelLogout}>
              <MdLogout />
            </button>
          </Authenticated>
          <Unauthenticated>
            <span className="text-gray-300">Discover our world</span>
            <button className="btn ml-2" onClick={handelLogin}>
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
