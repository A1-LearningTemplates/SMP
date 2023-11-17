import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { useAuth0 } from "@auth0/auth0-react";
const NavBar = () => {
  const { user, logout, loginWithRedirect } = useAuth0();
  const handelLogin = () => {
    loginWithRedirect();
  };
  const handelLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };
  console.log(user);

  return (
    <div className="fixed top-0 left-0 w-screen flex justify-between items-center h-16 bg-green-800">
      <div className="flex-none">Logo</div>
      <div className="flex justify-between items-center min-w-80 w-80">
        <Authenticated>
          <span>Hello, {user?.name}</span>
          <button className="btn" onClick={handelLogout}>
            Logout
          </button>
        </Authenticated>
        <Unauthenticated>
          <span className=" whitespace-nowrap">
            Log in now to discover our world
          </span>
          <button className="btn" onClick={handelLogin}>
            Login
          </button>
        </Unauthenticated>
        <AuthLoading>
          <p>Loading..</p>
        </AuthLoading>
      </div>
    </div>
  );
};

export default NavBar;
