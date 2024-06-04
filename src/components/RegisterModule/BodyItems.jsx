import MyInput from "../common/MyInput/MyInput"

const BodyItems = () => {
  return (
   <>
     <MyInput name="email" type={"email"} placeholder={"Enter your email"} />
        <MyInput
          name="phone number"
          placeholder={"Enter your phone number"}
          type={"number"}
        />
        <MyInput
          name="confirm password"
          placeholder={"Enter your confirm password"}
          type={"password"}
        />
        <div className="flex justify-between">
          <p className="text-xs font-medium">
            Agree to{" "}
            <span className="text-purple-600">Terms and Conditions</span>
          </p>
          <label className="relative inline-flex cursor-pointer items-center">
            <input id="switch" type="checkbox" className="peer sr-only" />
            <label htmlFor="switch" className="hidden"></label>
            <div className="peer h-[24px] w-10 rounded-full border-2 border-gray-600 bg-slate-300 after:absolute after:left-[2px] after:top-1 after:h-4 after:w-4 after:rounded-full after:border-2 after:border-gray-600 after:bg-gray-600 after:transition-all after:content-[''] peer-checked:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-gray-600 peer-focus:ring-green-300"></div>
          </label>{" "}
        </div>
   </>
  )
}

export default BodyItems