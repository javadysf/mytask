import {Link} from "react-router-dom"
import CoffeLogo from "../../assets/img/coffeelogo.png"
import { MyButton } from "../common/MyButton/MyButton"
const DetailsForm = () => {
  return (
    <div className="bg-slate-50 max-sm:bg-purple-900 max-sm:w-screen max-sm:p-1 max-sm:justify-end place-content-between w-[450px] h-screen rounded-xl p-20 pt-40 flex flex-col gap-4 ">
      <img className="max-sm:w-48 max-sm:hidden" src={CoffeLogo} />
      <div className="flex flex-col gap-4 ">
        <Link to={"/login"}>
      <MyButton styles={"max-sm:text-purple-900 max-sm:bg-white text-white  "} title={"Sing in"}/>
        </Link>
        <Link to={"register"}>
      <MyButton styles={"text-purple-900 max-sm:text-white max-sm:bg-purple-900 max-sm:border-white bg-white border-purple-900 border"} title={"Sing up"}/>
        </Link>
      </div>
      
    </div>
  )
}

export default DetailsForm