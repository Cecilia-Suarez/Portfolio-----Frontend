import '../Styles/Components/Button.css';

const Button = ({ src, alt, children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`buttonContainer ${className}`}>
      {src && <img src={src} alt={alt} className="buttonImage" />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
