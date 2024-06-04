import HomeIcon from "../../assets/img/imageMenu/Home.png";
import LibraryIcon from "../../assets/img/imageMenu/Library.png";
import SearchIcon from "../../assets/img/imageMenu/Search.png";
import ProfileIcon from "../../assets/img/imageMenu/Profile.png";
const ImagesMenu = () => {
  const menuOption = [
    {
      name: "Home",
      imgaddress: HomeIcon,
    },
    {
      name: "Search",
      imgaddress: SearchIcon,
    },
    {
      name: "Category",
      imgaddress: LibraryIcon,
    },
    {
      name: "Profile",
      imgaddress: ProfileIcon,
    },
  ];
  return (
    <div className="bg-white flex justify-between sm:hidden fixed bottom-0 left-0 right-0 px-12 py-2">
      {menuOption?.map((item) => (
        <span className="flex flex-col gap-1 items-center justify-center">
          <img src={item.imgaddress} />
          <p className="text-xs font-medium">{item.name}</p>
        </span>
      ))}
    </div>
  );
};
export default ImagesMenu;
