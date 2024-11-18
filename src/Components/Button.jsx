const Button = ({ children }) => {
  return (
    <button className="flex w-fit gap-2 px-4 py-2 text-white bg-blue-500 rounded-lg text-base">
      {children}
    </button>
  );
};

export default Button;
