export const MyButton = ({ styles, title }) => {
  return (
    <button
      className={`h-16 rounded-full text-sm w-full font-medium ${styles} bg-purple-900`} >
      {title}
    </button>
  );
};
