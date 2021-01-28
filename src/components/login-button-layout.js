import React from "react";
import { Link } from "gatsby";
import { getCurrentUser, isLoggedIn, logout } from "../utils/auth";
import { navigate } from "gatsby";

export default function LoginButtonLayout() {
  console.log(getCurrentUser());
  const userName = getCurrentUser().legalName;
  return !isLoggedIn() ? (
    <Link to="/app">Login</Link>
  ) : (
    <div class="row">
      <div class="col-md-12">
        <h4>Welcome {userName} !</h4>
      </div>
      <div class="col-md-12">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            logout(() => navigate(`/`));
          }}
        >
          Logout
        </a>
      </div>
    </div>
  );
}
