import { useState } from "react";
import { navbarInfo } from "../data/navbarinfo";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={`${isOpen ? "header nav-open " : "header "}`}>
      <Logo />
      <NavList />

      <button className="btn-mobile-nav">
        <ion-icon
          class="icon-mobile-nav"
          name="menu-outline"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        ></ion-icon>
      </button>
    </header>
  );
}
function Logo() {
  return (
    <a href=" ">
      <img className="logo" alt="piano with miryam logo" src="../img/studynov.png" />
    </a>
  );
}
function NavList() {
  return (
    <nav className=" main-nav">
      <ul className="main-nav-list">
        <li>
          <NavLink to="/" className="main-nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about us" className="main-nav-link">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact us" className="main-nav-link">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
