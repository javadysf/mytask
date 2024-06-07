import Form from "./Form"
import coffelogo from "../../assets/img/Vector.png"
const HomeModule = () => {
  return (
  <>
    <img className="sm:hidden absolute top-64 w-64 " src={coffelogo}/>
    <Form/>
  </>
  )
}

export default HomeModule