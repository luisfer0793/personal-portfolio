import styled from 'styled-components';

const StyledCard = styled.div`
  position: relative;
  cursor: pointer;
  height: 35rem;
  border-radius: 1rem;
  background-image: ${props => props.image ? `url(${props.image})` : 'linear-gradient(to right bottom, #0b1015, #ff4262)'};
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  transition: filter 250ms linear;
  &:hover {
    filter: grayscale(80%);
  }
  &:hover .project-card{
    transform: scaleY(1);
  }
  .project-card {
    position: absolute;
    padding: 5rem 3rem;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    text-align: center;
    border-radius: 1rem;
    background-image: linear-gradient(to right bottom, rgba(10, 30, 50, .6), rgba(23, 25, 29, 0.5));
    transform: scaleY(0);
    transition: transform 250ms linear;
    transform-origin: bottom;
    &__title {
      font-size: 2.5rem;
      font-weight: 400;
      text-transform: capitalize;
      color: #f5f5f5;
    }
    &__description {
      padding: 3rem 2.5rem 0;
      font-size: 1.5rem;
      color: #f5f5f5;
    }
  }
`;

const ProjectCard = ({title, image, description}) => (
  <StyledCard image={image}>
    <div className="project-card">
      <h5 className="project-card__title">{title}</h5>
      <p className="project-card__description">{description}</p>
    </div>
  </StyledCard>
);

export default ProjectCard;