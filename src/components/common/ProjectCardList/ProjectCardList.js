import ProjectCard from 'components/common/ProjectCard/ProjectCard';

import portfolio1 from 'assets/images/portfolio-1.png';
import portfolio2 from 'assets/images/portfolio-2.png';
import portfolio3 from 'assets/images/portfolio-3.png';

import 'components/common/ProjectCardList/ProjectCardList.css';

const projects = [
  {
    title: 'Conference',
    image: portfolio1,
    description: 'Website focused on conference planning through registration of participants, exhibitors and exhibition topics.'
  },
  {
    title: 'Photo Studio',
    image: portfolio2,
    description: 'Website designed for a freelance photographer in which he can show his portfolio to people around the world.'
  },
  {
    title: 'Grupo MAC',
    image: portfolio3,
    description: 'Website developed for a small business that manufactures windows and aluminum parts.'
  },
];


const ProjectCardList = props => (
  <div className="projects">
    {projects.map((project, index) => (
      <ProjectCard 
        title={project.title} 
        image={project.image} 
        description={project.description}
        key={index}
      />
    ))}
  </div>
);

export default ProjectCardList;