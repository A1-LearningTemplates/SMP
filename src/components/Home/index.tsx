import React from "react";
import User from "../Users";
import Posts from "../Posts";
import AddPost from "../AddPost";

const Home = () => {
  return (
    <div className="grid grid-cols-1 pt-20">
      <User />
      <Posts />
      <AddPost />
    </div>
  );
};

export default Home;
