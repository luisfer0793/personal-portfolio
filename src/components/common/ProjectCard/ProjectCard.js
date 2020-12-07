
import 'components/common/ProjectCard/ProjectCard.css';

const ProjectCard = ({title}) => (
  <div className="project-card">
    <h5 className="project-card__title">{title}</h5>
    <div className="project-card__bg"></div>
  </div>
);

export default ProjectCard;