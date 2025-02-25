import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* <Outlet /> component acts as a placeholder where the child routes of the root route  will
      be rendered */}
      <Outlet />
      {/* <p>List of cities</p> */}
      <footer className={styles.footer}>
        <p className={styles.copyright}>&copy;{new Date().getFullYear()} by WorldWise Inc</p>
      </footer>
    </div>
  );
}

export default Sidebar;
