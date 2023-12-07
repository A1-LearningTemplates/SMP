import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
  const { loginWithRedirect } = useAuth0();
  const handelLogin = () => {
    loginWithRedirect();
  };
  return (
    <section className="flex h-screen items-center gap-4 snap-start pt-20 lg:pb-0">
      <div className="overflow-hidden hidden flex-1 h-2/3 w-full rounded md:block ">
        <img
          className="shadow w-full"
          src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D"
          alt="trees"
        />
      </div>
      <div className="flex flex-col gap-4 justify-center text-center h-2/3 w-full flex-1 px-6 md:justify-between md:px-0 md:gap-0 md:text-start">
        <div>
          <h2 className="text-2xl font-bold border-b-2 border-b-slate-300 text-center pb-2">
            Introduction to Our Innovative Social Media Platform - SMP
          </h2>
        </div>
        <p className="flex flex-col gap-2 md:mb-10 md:overflow-hidden">
          <span>
            Welcome to our cutting-edge social media platform, a dynamic web
            application crafted to provide a good user experience. Our platform
            boasts a front-end built with React and Vite, offering a
            lightning-fast and responsive interface that keeps pace with the
            demands of today's users.
          </span>
          <span>
            Fueling the core of SMP is the Convex framework, a backend that
            enables scalability, efficiency, and security. Convex allows us to
            manage data seamlessly, process requests efficiently, and maintain
            the robustness of our application.
          </span>
          <span>
            In the realm of authentication and security, SMP turns to Auth0.
            With Auth0 integration, we implement a world-class authentication
            system that safeguards user information while providing a seamless
            login experience.
          </span>
        </p>

        <button
          onClick={handelLogin}
          className="btn text-gray-200 md:self-start"
        >
          Join Us
        </button>
      </div>
    </section>
  );
};

export default Header;
