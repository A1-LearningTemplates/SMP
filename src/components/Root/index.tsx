import { Outlet, useNavigate, useLocation } from "react-router-dom";
import NavBar from "../NavBar";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Root = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isAuthenticated);

    if (isAuthenticated && location.pathname === "/") {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [isAuthenticated]);
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Root;
