import NinjaLogo from "../../assets/img/ninja.png"
const ImageFrame = () => {
  return (
    <div className="w-48 h-64 bg-white rounded flex flex-col gap-4 p-4">
      <img className="w-full h-32 p-4" src={NinjaLogo}  />
      <h2 className="font-medium">hi</h2>
      <p className="text-xs truncate">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </p>
    </div>
  );
};

export default ImageFrame;
