import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  //we use useEffect as an synchronization algorithm ,i.e we look whenever dependency changes
  //and when that dependency changes we might need something to happen
  //in that case we will use useEffect
  //like for example

  //event handlers will be looking for an event to happen and one particular fn wiil be called

  //in the same way useEffect will be looking for dependency changes,and whenever that dependency changes one particular function will be called
  //to synchtonize the component with outer world or to synchronize one state with another and so on
  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
