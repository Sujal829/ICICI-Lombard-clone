import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const user = useSelector((state) => state.auth.user);

  // immediate check during render
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // render the protected content
  return children;
}

export default PrivateRoute;
