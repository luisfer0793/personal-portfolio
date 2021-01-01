import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedinIn, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

import styled from 'styled-components';

const StyledSocialBar = styled.ul`
  position: fixed;
  display: flex;
  left: 7rem;
  bottom: 0;
  list-style: none;
  align-items: center;
  flex-direction: column;
  &::after {
    width: 0.1rem;
    height: 9rem;
    content: '';
    background-color: #2e2e2e;
  }
`;

const StyledSocialItem = styled.li`
  margin-bottom: 3.5rem;
`;


const StyledSocialLink = styled.a`
  font-size: 2.2rem;
  color: #2e2e2e;

  .icon {
    transition: color 200ms linear, transform 200ms linear;
  }

  &:hover {
    color: ${({variant}) => 
      variant === 'github' ? '#2EA44F' :
      variant === 'linkedin' ? '#0A66C2' :
      variant === 'twitter' ? '#1DA1F2' :
      variant === 'instagram' ? '#D32681' : "#2e2e2e"
    };
    & .icon {
      transform: translateX(1rem);
    }
  }
`;

const Socialbar = props => {
  const icons = [
    {
      icon: faGithub,
      ref: 'https://github.com/luisfer0793',
      variant: 'github'
    },
    {
      icon: faLinkedinIn,
      ref: 'https://www.linkedin.com/in/luisfernandojimenez93',
      variant: 'linkedin'
    },
    {
      icon: faTwitter,
      ref: 'https://twitter.com/fervasr',
      variant: 'twitter'
    },
    {
      icon: faInstagram,
      ref: 'https://www.instagram.com/feer_jim23',
      variant: 'instagram'
    },
  ];


  return (
    <StyledSocialBar>
      {icons.map((item, index) => (
        <StyledSocialItem key={index}>
          <StyledSocialLink 
            href={item.ref}
            target="_blank" 
            rel="noreferrer"
            variant={item.variant}
          >
            <FontAwesomeIcon icon={item.icon} className="icon" />
          </StyledSocialLink>
        </StyledSocialItem>
      ))}
    </StyledSocialBar>
  );
};

export default Socialbar;