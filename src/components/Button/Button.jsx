export const Button = ({ handleClick, text }) => {
  return (
    <button type="button" className="Button" onClick={handleClick}>
      {text}
    </button>
  );
};
