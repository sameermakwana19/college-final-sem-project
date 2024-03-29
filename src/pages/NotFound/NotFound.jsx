import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h2 className="notfound-text">404 - Page not Found</h2>
      <p>
        Back to <Link to="/">Home Page.</Link>
      </p>
    </>
  );
};

export default NotFound;
