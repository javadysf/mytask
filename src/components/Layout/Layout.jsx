import { Outlet } from "react-router-dom";
import LayoutLogo from "../../assets/img/Vector.png";
const Layout = () => {
  return (
    <div className=" max-sm:p-0 bg-purple-900 w-screen h-screen p-16 flex flex-col items-center justify-center">
      <img src={LayoutLogo} className="w-36 h-6 absolute max-sm:h-10 max-sm:hidden  max-sm:relative max-sm:left-auto max-sm:w-56 max-sm:top-48 top-8 left-48" />
      <Outlet />
    </div>
  );
};

export default Layout;
