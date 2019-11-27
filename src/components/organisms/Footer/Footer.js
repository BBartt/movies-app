import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "routes/routes";

const Footer = () => (
  <footer className="d-flex align-items-center flex-column flex-lg-row bg-secondary p-2">
    <div className="col-12 col-lg-5 text-white my-3">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
        aliquid accusantium, dolores minima adipisci dignissimos. Sed
        accusantium minima molestias ratione, iste est, veritatis atque possimus
        quae in rerum ab! Provident!
      </p>
    </div>

    <div className="col-12 col-lg-3 text-white my-3">
      Copyright © 2019 John Doe All Rights Reserved
    </div>

    <ul className="col-12 col-lg-4 d-flex justify-content-around my-3">
      <li className="d-table">
        <NavLink
          exact
          to={routes.movies_app}
          className="list-group-item list-group-item-action"
        >
          Home
        </NavLink>
      </li>

      <li className="d-table">
        <NavLink
          to={routes.about}
          className="list-group-item list-group-item-action"
        >
          About
        </NavLink>
      </li>

      <li className="d-table">
        <NavLink
          to={routes.contact}
          className="list-group-item list-group-item-action"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  </footer>
);

export default Footer;
