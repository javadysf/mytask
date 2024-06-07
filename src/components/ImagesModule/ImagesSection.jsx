import ImageFrame from "./ImageFrame"
import ImagesNav from "./ImagesNav"
import {LoadingModule} from "../common/LoadingModule/index"

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
     <ImagesNav/>
    </div>
  )
}

export default ImagesSection