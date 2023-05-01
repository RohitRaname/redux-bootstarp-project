import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  //   const { user } = useSelector((store) => store.user);
  let user;
  // if (!user) {
  //   return <Navigate to="/" />;
  // }
  return children;
};
export default ProtectedRoute;
