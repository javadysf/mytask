import { Link } from "react-router-dom"
import CoffeeLogo from "../../assets/img/coffeelogo.png"
import logOutLogo from "../../assets/img/lo.png"
import { SearchBar } from "../common/SearchBar/SearchBar"
import { clearStorage } from "../../core/Services/common/storage.services"
const Header = ({setIsLoggedIn}) => {
  const func=()=>{
    clearStorage()
    setIsLoggedIn(false)
  }
  return (
    <div className=" max-sm:hidden flex justify-between bg-purple-100 w-full px-48 py-2">
      <div className="flex gap-6 ">
        <Link to={"/"}>
        <img className="w-32 h-8" src={CoffeeLogo}/>
        </Link>
        <SearchBar/>
      </div>
      <a onClick={()=>func()} href={"/"} ><img className="w-10 h-8" src={logOutLogo} /></a>
    </div>
  )
}

export default Header