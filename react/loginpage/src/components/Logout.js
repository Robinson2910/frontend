import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import "./Logout.css";
function Logout() {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div className="logout">
      <h1>
        Welcome <span className="user__name">Robinson</span>
      </h1>
      <button className="logout__button" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
