import React from "react";
import NavbarLink from "./NavbarLink/NavbarLink";
import { MdOutlineHome } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import useDarkModeStore from "../../Store/DarcModeStore";
import useBurgerStore from "../../Store/BurgerStore";
import { MdReviews } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";


// img logo
import Logo from "../../assets/images/Logo.png";

export default function Navbar() {
  const { darkMode } = useDarkModeStore();
  const { isMenuOpen } = useBurgerStore();

  return (
    <div
      className={`${darkMode ? "navbar" : "navbar_dark"} ${isMenuOpen ? "navbar_open" : ""
        }`}
    >
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <ul className="navbar_wrapper">
        <NavbarLink href={"/"} icon={<MdOutlineHome />} text={"Главный"} />
        <NavbarLink
          href={"/teachers"}
          icon={<FaChalkboardTeacher />}
          text={"Учителя"}
        />
        <NavbarLink
          href={"/reviews"}
          icon={<MdReviews />}
          text={"Отзывы"}
        />
        <NavbarLink
          href={"/advantages"}
          icon={<BiSolidLike />}
          text={"Преимущества"}
        />
      </ul>
    </div>
  );
}
