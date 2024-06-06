import { Link } from "react-router-dom"
import CoffeeLogo from "../../../assets/img/coffeelogo.png"
import logOutLogo from "../../../assets/img/lo.png"
import { SearchBar } from "../SearchBar/SearchBar"
import { clearStorage } from "../../../core/Services/common/storage.services"
const Header = () => {
  return (
    <div className=" max-sm:hidden flex justify-between bg-purple-100 w-full px-48 py-2">
      <div className="flex gap-6 ">
        <Link to={"/"}>
        <img className="w-32 h-8" src={CoffeeLogo}/>
        </Link>
        <SearchBar/>
      </div>
      <Link onClick={()=>clearStorage()} to={"/"} ><img className="w-10 h-8" src={logOutLogo} /></Link>
    </div>
  )
}

export default Header