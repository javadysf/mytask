import DetailsForm from "../common/detailsForm/DetailsForm"
import coffelogo from "../../assets/img/Vector.png"
const HomeModule = () => {
  return (
  <>
    <img className="sm:hidden absolute top-64 w-64 " src={coffelogo}/>
    <DetailsForm/>
  </>
  )
}

export default HomeModule