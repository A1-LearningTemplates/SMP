import React from "react";
import User from "../Users";
import Posts from "../Posts";
import AddPost from "../AddPost";

const Home = () => {
  return (
    <div className="grid grid-cols-1 pt-20">
      <AddPost />
      <User />
      <Posts />
    </div>
  );
};

export default Home;
