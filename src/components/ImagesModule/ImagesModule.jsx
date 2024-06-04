import { useEffect } from "react"
import Header from "../common/Header/Header"
import ImagesSection from "./ImagesSection"
import { getUserItems } from "../../core/Services/Api/userItems"

const ImagesModule = () => {
  const userItems=async()=>{
    const res = await getUserItems();
    console.log(res);
  }
  useEffect(()=>{
userItems();
  },[])
  return (
    <div >
        <Header/>
        <ImagesSection/>
    </div>
  )
}

export default ImagesModule