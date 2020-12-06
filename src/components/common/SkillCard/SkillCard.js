import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'components/common/SkillCard/SkillCard.css';

const SkillCard = ({title, icon, text}) => (
  <div className="skillcard">
    <FontAwesomeIcon icon={icon} className="skillcard__icon" />
    <h4 className="skillcard__title">{title}</h4>
    <p className="skillcard__text">{text}</p>
  </div>
);

export default SkillCard;