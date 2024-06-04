export const MyButton = ({ styles, title,clickHandler }) => {
  return (
    <button
      className={`h-16 max-sm:h-12 rounded-full text-sm w-full font-medium ${styles} bg-purple-900`} onClick={clickHandler} >
      {title}
    </button>
  );
};
