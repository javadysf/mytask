import { Link } from "react-router-dom"

const BodyItems = () => {
  return (
    <>
    <Link to={"/forgetpassword"} className="text-xs font-medium self-end">forgot password?</Link>
  <div className="flex items-center gap-2">
    <span>Remember me</span>
    <input className="mt-1" type="checkbox" />
  </div> 
  </>
  )
}

export default BodyItems