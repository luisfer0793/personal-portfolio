import 'components/common/Button/Button.css';

const Button = ({label, handler, variant}) => (
  <button className={['button', variant].join(' ')} onClick={handler}>{label}</button>
);

export default Button;