const Button = ({ children, className }) => {
  return (
    <button
      className={`flex w-fit gap-1 px-4 py-2 items-center text-white bg-blue-500 rounded-lg text-base shadow-lg shadow-blue-500/50 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
