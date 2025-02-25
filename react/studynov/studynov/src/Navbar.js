import { useState } from "react";
export default function Navbar() {
  const [active, setActive] = useState(0);
  return (
    <header className="header">
      <Logo />
      <NavList active={active} setActive={setActive} />
      {/* <button className="btn-mobile-nav">
        <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
      </button> */}
    </header>
  );
}
function Logo() {
  return (
    <a href=" ">
      <img className="logo" alt="Omnifood logo" src="studynov.png" />
    </a>
  );
}
function NavList({ active, setActive }) {
  return (
    <nav className="main-nav">
      <ul className="main-nav-list">
        <NavItem num={0} active={active} setActive={setActive}>
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
        </NavItem>
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
      {console.log(active + "render")}
      <a
        className={`${(cta ? "main-nav-link nav-cta" : "main-nav-link ").concat(
          `${active === num ? "active" : " "}`
        )}`}
        href=" "
      >
        {children}
      </a>
    </li>
  );
}
