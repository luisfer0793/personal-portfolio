import styled from 'styled-components';

const StyledIcon = styled.span`
  font-family: 'Catamaran', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  text-transform: capitalize;
`;
const Logo = props => (
  <StyledIcon>JMNZ.</StyledIcon>
);

export default Logo;