import { useState } from "react";
import { navbarInfo } from "../data/navbarinfo";
export default function Navbar() {
  const [active, setActive] = useState(navbarInfo.active);
  const [isOpen, setIsOpen] = useState(navbarInfo.open);
  return (
    <header className={`${isOpen ? "header nav-open " : "header "}`}>
      <Logo />
      <NavList active={active} setActive={setActive} />

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
      <img className="logo" alt="studynov logo" src={navbarInfo.logoSrc} />
    </a>
  );
}
function NavList({ active, setActive }) {
  return (
    <nav className=" main-nav">
      <ul className="main-nav-list">
        {navbarInfo.navItems.map(({ text, cta }, index) => (
          <NavItem num={index} active={active} setActive={setActive} cta={cta} key={text}>
            {text}
          </NavItem>
        ))}
        {/* <NavItem num={0} active={active} setActive={setActive}>
          Home
        </NavItem>
        <NavItem num={1} active={active} setActive={setActive}>
          Services
        </NavItem>
        <NavItem num={2} active={active} setActive={setActive}>
          About us
        </NavItem>
        <NavItem num={3} active={active} setActive={setActive}>
          Contact us
        </NavItem>
        <NavItem cta={true} num={4} active={active} setActive={setActive}>
          Book free Consultation
        </NavItem> */}
      </ul>
    </nav>
  );
}
function NavItem({ children, cta, active, num, setActive }) {
  return (
    <li
      onClick={(e) => {
        e.preventDefault();
        setActive(num);
      }}
    >
      {/* {console.log(active + "render")} */}
      <a
        className={`${(cta ? "main-nav-link nav-cta" : "main-nav-link ").concat(
          `${active === num && num !== navbarInfo.navItems.length - 1 ? "active" : " "}`
        )}`}
        href=" "
      >
        {children}
      </a>
    </li>
  );
}
