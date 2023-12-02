import React, { useEffect, useRef, useState } from "react";
import Users from "../Users";
import Posts from "../Posts";
import AddPost from "../AddPost";

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const toggleClassName = () => {
    setFadeIn((prev) => !prev);
  };

  return (
    <div className="grid grid-cols-1 pt-20">
      <AddPost />
      <Users fadeIn={fadeIn} toggleClassName={toggleClassName} />
      <Posts />
      {!fadeIn && (
        <div className="fixed w-12 h-12 z-10 text-center top-20 right-3">
          <button
            className=" absolute  bg-green-400 w-full h-full rounded-full animate-ping z-10"
            onClick={toggleClassName}
          >
            chat
          </button>
          <span className="relative inline-flex items-center justify-center z-0 rounded-full w-full h-full bg-green-400/[.80]">
            chat
          </span>
        </div>
      )}
    </div>
  );
};

export default Home;
