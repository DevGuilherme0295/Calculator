
const Button = ({ type, backgroundColor, hover }) => {

  const style = `
    button
    ${backgroundColor}
    ${hover}
  `;

  return (
    <>
      <button className={style}>{type}</button>
    </>
  );
}

export default Button;
