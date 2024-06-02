import { Link } from "react-router-dom";
import { MyButton } from "../MyButton/MyButton";
import MyInput from "../MyInput/MyInput";
const AuthForm = ({title,description,deslink,linktitle,actionname,btncolor}) => {
  return (
    <div className="bg-slate-50  w-[450px] h-[616px] rounded-xl p-20 flex flex-col place-content-between">
    <div className="flex flex-col gap-6">
    <h2 className="font-medium text-xl">
      {title}
    </h2>
    <MyInput placeholder={"Enter your email"} />
    <MyInput placeholder={"Enter your password"} type={"password"} />
    </div>
    <div className="flex flex-col items-center gap-2">
    <MyButton title={actionname} styles={"text-white font-medium "} />
    <p>{description} <Link to={deslink} className="text-purple-900 font-medium">{linktitle}</Link></p>
    </div>
  </div>
  )
}

export default AuthForm