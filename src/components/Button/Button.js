import "./Button.css";

const Button = ({
  label,
  action,
  show = true,
  bgColor = "orange",
  textColor = "#fff",
  align = "flex-end",
  border = false,
}) => {
  const containerAlign = {
    justifyContent: align,
  };

  const buttonStyle = {
    backgroundColor: bgColor,
    color: textColor,
    border: border ? `1px solid ${textColor}` : "none",
  };

  return (
    <div style={containerAlign} className="container">
      {show ? (
        <button style={buttonStyle} className="button" onClick={action}>
          {label}
        </button>
      ) : null}
    </div>
  );
};

export default Button;
