import ImageFrame from "./ImageFrame"

const ImagesSection = () => {
  return (
    <div className="w-full flex gap-8 justify-center flex-col py-12 max-sm:p-2 px-48 bg-slate-200">
        <h2 className="font-black text-2xl">CoffeeScript</h2>
        <div className="flex justify-center flex-wrap gap-8">
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