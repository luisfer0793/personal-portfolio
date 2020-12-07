import 'components/common/Button/Button.css';

const Button = ({label, handler}) => (
  <button className="button" onClick={handler}>{label}</button>
);

export default Button;