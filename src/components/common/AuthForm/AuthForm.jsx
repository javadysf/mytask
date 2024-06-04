import { Link } from "react-router-dom";
import { useState } from "react";
import { MyButton } from "../MyButton/MyButton";
import MyInput from "../MyInput/MyInput";
import fblogo from "../../../assets/img/fb.png";
import googlelogo from "../../../assets/img/google.png";
import applelogo from "../../../assets/img/apple.png";

const styles =
  "border border-gray-500 rounded-3xl flex justify-center items-center w-1/3 p-4";

const AuthForm = ({
  title,
  description,
  deslink,
  linktitle,
  actionname,
  authFunc,
  moduleBody,
}) => {
  const [value, setValue] = useState({ username: "", password: "" });
  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const clickHandler = () => {
    authFunc(value);
  };
  return (
    <div className="bg-slate-50 max-sm:w-screen max-sm:h-screen max-sm:rounded-none  w-[450px] h-[650px] rounded-xl p-16 flex flex-col place-content-between">
      <Link className="sm:hidden absolute top-2 left-2 h-8 text-3xl" to={"/"}>
        {`<`}
      </Link>
      <div className="flex flex-col gap-3">
        <h2 className="font-medium text-xl">{title}</h2>
        <MyInput
          name="username"
          value={value.username}
          changeHandler={changeHandler}
          placeholder={"Enter your username"}
        />
        <MyInput
          name="password"
          value={value.password}
          changeHandler={changeHandler}
          placeholder={"Enter your password"}
          type={"password"}
        />
      
        {moduleBody}
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-purple-900 font-medium">
          Choose diffrent method
        </span>
        <MyButton
          clickHandler={clickHandler}
          title={actionname}
          styles={"text-white font-medium "}
        />
        <div className="flex w-full items-center justify-between text-gray-500 font-medium ">
          <hr className="w-1/3" />
          <p className="text-xs">Or Sing in with</p>
          <hr className="w-1/3" />
        </div>
        <div className="flex gap-2 w-full">
          <span className={styles}>
            {" "}
            <img src={fblogo} />{" "}
          </span>
          <span className={styles}>
            {" "}
            <img src={googlelogo} />{" "}
          </span>
          <span className={styles}>
            {" "}
            <img src={applelogo} />{" "}
          </span>
        </div>
        <p>
          {description}{" "}
          <Link to={deslink} className="text-purple-900 font-medium">
            {linktitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
