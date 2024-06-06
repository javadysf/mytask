import { useEffect, useState } from "react"
import Header from "../common/Header/Header"
import ImagesSection from "./ImagesSection"
import { getUserItems } from "../../core/Services/Api/userItems"

const ImagesModule = () => {
  const [images,setImages] = useState([])
  const userItems=async()=>{
    const res = await getUserItems();
    const data = await res.data;
    setImages({data})
  }
  useEffect(()=>{
userItems();
  },[])
  console.log(images.data);
  return (
    <div >
        <Header/>
        <ImagesSection images={images} />
    </div>
  )
}

export default ImagesModule