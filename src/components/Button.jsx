import ButtonSvg from "../assets/svg/ButtonSvg";
function Button({ className, href, onClick, children, px, white }) {
  const classes = `bg-white mx-10`;
  const renderButton = () => (
    <button className={classes}>
      <span>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  return <div>{children}</div>;
}

export default Button;
