import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useStateValue } from "../../StateProvider";

import { StyledNavLinks } from "../styles/StyledNavBar";

const NavBar = () => {
  const [{ user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <StyledNavLinks>
      <ul>
        <Link to="/">
          <li>Movies</li>
        </Link>
        <Link to="/tvshows">
          <li>TV Shows</li>
        </Link>
        <Link to={!user && "/login"}>
          <li onClick={handleAuthentication}>{!user ? "Login" : "Logout"}</li>
        </Link>
      </ul>
    </StyledNavLinks>
  );
};

export default NavBar;
