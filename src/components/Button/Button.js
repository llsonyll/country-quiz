import "./Button.css";

const Button = ({ label, action, show = true }) => {
  return (
    <div className="container">
      {show ? (
        <button className="button" onClick={action}>
          {label}
        </button>
      ) : null}
    </div>
  );
};

export default Button;
