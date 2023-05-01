import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { Footer } from "../components";
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default SharedLayout;
