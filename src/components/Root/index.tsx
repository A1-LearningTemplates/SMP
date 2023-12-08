import { useNavigate, Outlet, useLocation } from "react-router-dom";
import NavBar from "../NavBar";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Root = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/");
    } else {
      navigate(location.pathname);
    }
  }, [isAuthenticated, isLoading]);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Root;
