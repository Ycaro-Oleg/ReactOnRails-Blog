import { Link } from "react-router-dom"
import React from "react";

function NavBar() {
  return (
    <nav>
      <Link to= "/">Posts List</Link>
      {" | "}
      <Link to= "/new">New Post</Link>
    </nav>
  )
}

export default NavBar;