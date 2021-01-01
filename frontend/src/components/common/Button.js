import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  padding: 1.5rem 3.5rem;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  color: ${props => props.variant ? 'var(--primary-black)' : 'var(--primary-white)'};
  outline: none;
  background-color: ${props => props.variant ? 'var(--primary-white)' : 'var(--primary-black)'};
  transition: color 250ms linear, background-color 250ms linear;
  &:hover {
    color: var(--primary-black);
    background-color: var(--secondary-red);
  }
`;

const Button = ({label, handler, variant}) => (
  <StyledButton onClick={handler} variant={variant} >
    {label}
  </StyledButton>
);

export default Button;
