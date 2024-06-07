import { useEffect, useState } from "react"
import Header from "./Header"
import ImagesSection from "./ImagesSection"
import { getUserItems } from "../../core/Services/Api/userItems"

const ImagesModule = ({setIsLoggedIn}) => {

  const [images,setImages] = useState([])
  const userItems=async()=>{
    const res = await getUserItems();
    const data = await res.data;
    setImages({data})
  }
  useEffect(()=>{
  //load user imagePage items
userItems();
  },[])
  return (
    <div >
        <Header setIsLoggedIn={setIsLoggedIn}/>
        <ImagesSection images={images} />
    </div>
  )
}

export default ImagesModule