import { Link } from "react-router-dom"
import CoffeeLogo from "../../../assets/img/coffeelogo.png"
import { SearchBar } from "../SearchBar/SearchBar"
const Header = () => {
  return (
    <div className=" max-sm:hidden flex gap-6 bg-purple-100 w-full px-48 py-2">
        <Link to={"/"}>
        <img className="w-32 h-8" src={CoffeeLogo}/>
        </Link>
        <SearchBar/>
    </div>
  )
}

export default Header