const MyInput = ({ placeholder, type,value,changeHandler,name }) => {
 
  return (
    <input
      className="border-purple-900 border-2 rounded-full w-full h-12 p-4 text-sm "
      placeholder={placeholder}
      type={type}
      value={value}
      name={name}
      onChange={(e)=>changeHandler(e)}
    />
  );
};

export default MyInput;
