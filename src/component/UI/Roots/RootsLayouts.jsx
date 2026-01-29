import { Outlet } from "react-router-dom";
import Navigate from "../Navbar/Navbar";

const RootsLayouts = () => {
  return (
    <>
      <Navigate />

      <Outlet />
    </>
  );
};

export default RootsLayouts;
