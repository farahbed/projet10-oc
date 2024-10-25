// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "./header/signOut";
import { useSelector } from "react-redux";
import { getUser } from "../redux/userSlice";

const Header = () => {
  const user = useSelector(getUser);

  return (
    <nav>
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Logo Argent Bank"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div>
        {user ? (
          <>
            <Link to="/profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {user.firstName} {user.lastName}
            </Link>
            <SignOutButton />
          </>
        ) : (
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
