import ImageFrame from "./ImageFrame"

const ImagesSection = () => {
  return (
    <div className="w-full flex gap-8 flex-col py-12 px-48 bg-slate-200">
        <h2 className="font-black text-2xl">CoffeeScript</h2>
        <div className="flex flex-wrap gap-8">
        <ImageFrame/>
        <ImageFrame/>
        <ImageFrame/>
        <ImageFrame/>
        <ImageFrame/>
        <ImageFrame/>
        <ImageFrame/>
        <ImageFrame/>
        </div>
    </div>
  )
}

export default ImagesSection