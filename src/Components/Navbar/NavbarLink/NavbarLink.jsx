import React from "react";
import { NavLink } from "react-router-dom";
import useDarkModeStore from "../../../Store/DarcModeStore";

export default function NavbarLink({ text, icon, href }) {
  const { darkMode } = useDarkModeStore();

  return (
    <li>
      <NavLink className={darkMode ? "navbar_link" : "navbar_link_dark"} to={href}>
        <span className="navbar_icon">{icon}</span>
        <p className="navbar_text">{text}</p>
      </NavLink>
    </li>
  );
}
