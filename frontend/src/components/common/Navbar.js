import { Logo } from 'components/common';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from 'styled-components';

const StyledNavbar = styled.nav`
  position: absolute;
  display: flex;
  padding: 1.4rem 7rem;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
`;

const iconStyles = {
  fontSize: '3rem',
  color: '#0b1015',
  cursor: 'pointer'
};

const Navbar = ({toggleMenuHandler}) => {
 
  return (
    <StyledNavbar>
      <Logo/>
      <FontAwesomeIcon
        icon={faBars}
        style={iconStyles}
        onClick={toggleMenuHandler}
      />
    </StyledNavbar>
  );
}

export default Navbar;