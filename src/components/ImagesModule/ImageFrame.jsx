const ImageFrame = ({image:{image,name,description}}) => {
  return (
    <div className="max-sm:w-36 max-sm:h-50 w-48 h-64 bg-white rounded flex flex-col gap-4 p-4">
      <img className="w-full max-sm:h-18 h-32 p-4" src={image}  />
      <h2 className="font-medium">{name}</h2>
      <p className="text-xs truncate">
     {description}
      </p>
    </div>
  );
};

export default ImageFrame;
