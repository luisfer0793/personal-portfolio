import styled  from "styled-components";

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50vw;
  min-height: 100vh;
  z-index: 10;
  background-color: var(--primary-black);
  transition: transform 250ms ease-out;
  transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(100%)'};
`;

const StyledBackdrop = styled.div`
  display: ${props => props.isVisible ? 'block' : 'none'};
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, .5);
`;

const StyledList = styled.ul`
  display: flex;
  height: 100%;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

const StyledItem = styled.li`
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const StyledLink = styled.a`
  position: relative;
  display: inline-block;
  font-size: 5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  color: transparent;
  transition: color 250ms linear;
  -webkit-text-stroke: .1rem var(--primary-white);
  -webkit-font-smoothing: antialiased;
  &:hover {
    color: var(--primary-white);
  }
`;

const SliderMenu = ({isVisible, toggleHandler}) => {
  const links = [
    { text: 'About', to: '#about' },
    { text: 'Blog', to: '#blog' },
    { text: 'Portfolio', to: '#portfolio' },
    { text: 'Contact', to: '#contact' }
  ];

  return (
    <>
      <StyledBackdrop isVisible={isVisible} onClick={toggleHandler}/>
      <StyledMenu isVisible={isVisible}>
        <StyledList>
          {links.map((item, index) => (
            <StyledItem key={index}>
              <StyledLink href={item.to}>{item.text}</StyledLink>
            </StyledItem>
          ))}
        </StyledList>
      </StyledMenu>
    </>
  );
}

export default SliderMenu;