import React from "react";
import { Link, Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div>
        <h3 className="mb-5 text-center">My Email Password Authentication</h3>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
