import Login from "./components/Login";
import "./components/Login.css";
import "./components/App.css";
import { useSelector } from "react-redux";
import Logout from "./components/Logout";

function App() {
  const user = useSelector((state) => state.user.user);
  return <div className="app">{user?.loggedIn ? <Logout /> : <Login />}</div>;
}

export default App;
