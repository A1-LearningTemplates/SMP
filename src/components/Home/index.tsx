import React, { useRef, useState } from "react";
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
      <div className="fixed right-0 p-2">
        <button onClick={toggleClassName}>chat</button>
      </div>
    </div>
  );
};

export default Home;
