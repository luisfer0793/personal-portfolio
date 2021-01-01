import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

const StyledSkillCard = styled.div`
  padding: 6rem;
  text-align: center;
  background-color: var(--primary-white);
  .skillcard__title {
    margin-top: 3rem;
    font-weight: 700;
    font-size: 2rem;
    text-transform: capitalize;
    color: var(--primary-black);
  }
  .skillcard__text {
    color: var(--secondary-black);
    padding-top: 1.5rem;
  }
  .skillcard__icon {
    font-size: 3rem;
    color: var(--primary-red);
  }
`;

const SkillCard = ({title, icon, text}) => (
  <StyledSkillCard>
    <FontAwesomeIcon icon={icon} className="skillcard__icon" />
    <h4 className="skillcard__title">{title}</h4>
    <p className="skillcard__text">{text}</p>
  </StyledSkillCard>
);

export default SkillCard;