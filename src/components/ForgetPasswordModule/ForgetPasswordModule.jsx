import { Link } from "react-router-dom"
import MyInput from "../common/MyInput/MyInput"
import { MyButton } from "../common/MyButton/MyButton"


const ForgetPasswordModule = () => {
  return (
    <div className="bg-slate-50 max-sm:w-screen max-sm:h-screen max-sm:rounded-none  w-[450px] h-[650px] rounded-xl p-16 flex flex-col place-content-between">
      <Link className="sm:hidden absolute top-2 left-2 h-8 text-3xl" to={"/"}>
        {`<`}
      </Link>
      <div className="flex flex-col gap-16">
        <h2 className="font-black text-xl flex justify-center">{"Please verify your email"}</h2>
        <div>
        <MyInput
          name="username"
          placeholder={"Enter your email address"}
          />
        <p className="text-xs flex justify-end text-gray-600 font-medium">
        Don’t receive an email!
          <Link to={"/"} className="text-purple-900 font-medium">
           {" "}Send again
          </Link>
        </p>
          </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <MyButton
          title={"verify"}
          styles={"text-white font-medium "}
        />
        
      </div>
    </div>
  )
}

export default ForgetPasswordModule