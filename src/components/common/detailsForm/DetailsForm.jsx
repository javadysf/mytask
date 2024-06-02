import {Link} from "react-router-dom"
import CoffeLogo from "../../../assets/img/coffeelogo.png"
import { MyButton } from "../MyButton/MyButton"
const DetailsForm = () => {
  return (
    <div className="bg-slate-50 place-content-between w-[450px] h-[616px] rounded-xl p-20 pt-40 flex flex-col gap-4">
      <img src={CoffeLogo} />
      <div className="flex flex-col gap-4 ">
        <Link to={"/login"}>
      <MyButton styles={"text-white"} title={"Sing in"}/>
        </Link>
        <Link to={"register"}>
      <MyButton styles={"!bg-white text-purple-900 border-purple-900 border-2"} title={"Sing up"}/>
        </Link>
      </div>
      
    </div>
  )
}

export default DetailsForm