import { useState } from "react";
import showIcon from "../../../assets/img/Icon.png"

const MyInput = ({ placeholder, type,value,changeHandler,name,showPassword,setShowPassword }) => {
  return (
    <div className="relative">
    <input
      className="border-purple-900 border-2 rounded-full w-full h-12 p-4 text-sm "
      placeholder={placeholder}
      type={type}
      value={value}
      name={name}
      onChange={(e)=>changeHandler(e)}
      />
      {name==="password"&& <img className="w-6 absolute top-2 right-3 cursor-pointer" src={showIcon} onClick={() => setShowPassword((prev) => !prev)}/>
      }
     
      </div>
  );
};

export default MyInput;
