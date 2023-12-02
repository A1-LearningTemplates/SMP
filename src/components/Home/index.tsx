import React, { useRef } from "react";
import Users from "../Users";
import Posts from "../Posts";
import AddPost from "../AddPost";

const Home = () => {
  const usersRef = useRef<HTMLDivElement>(null);
  const toggleClassName = () => {
    if (usersRef.current) {
      usersRef.current.classList.toggle("hidden");
    }
  };
  return (
    <div className="grid grid-cols-1 pt-20">
      <AddPost />
      <Users divRef={usersRef} />
      <Posts />
      <div className="fixed right-0 p-2">
        <button onClick={toggleClassName}>chat</button>
      </div>
    </div>
  );
};

export default Home;
