import * as React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = (): JSX.Element => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky">
      <ul className="navbar-nav d-flex">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/favs">
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
