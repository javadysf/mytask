import ImageFrame from "./ImageFrame"
import ImagesMenu from "./ImagesMenu"
import {LoadingModule} from "../common/LoadingModule/index"
import { toast } from "react-toastify"

const ImagesSection = ({images:{data}}) => {
  return (
    <div className="w-full  flex gap-8 justify-center flex-col py-12 max-sm:p-2 px-48 bg-slate-200">
        <h2 className="font-black text-2xl">CoffeeScript</h2>
        <div className={`flex  max-sm:h-screen max-sm:overflow-scroll flex-wrap gap-8 ${data?"":"justify-center"} `}>
        {
          data?
          data?.map(image=>
            <ImageFrame key={image.pk} image={image} />
          ):<LoadingModule/>
        }
     
        </div>
     <ImagesMenu/>
    </div>
  )
}

export default ImagesSection