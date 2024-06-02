import { Link, Outlet } from "react-router-dom";
import LayoutLogo from "../../assets/img/Vector.png";
const Layout = () => {
  return (
    <div className="bg-purple-900 w-full h-full p-16 flex justify-center">
      <Link to={"/"}>
      <img src={LayoutLogo} className="w-36 h-6 absolute top-8 left-48" />
      </Link>
      <Outlet />
    </div>
  );
};

export default Layout;
