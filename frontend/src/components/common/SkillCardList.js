import { SkillCard } from 'components/common';

import styled from 'styled-components';

import {
  faAnchor, 
  faMobileAlt, 
  faLaptopCode
} from '@fortawesome/free-solid-svg-icons';

const StyledSkillCardList = styled.div`
  display: grid;
  padding-top: 5rem;
  column-gap: 3rem;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 40rem));
`;

const SkillCardList = props => {
  const skills = [
    {
      icon: faAnchor,
      title: 'UI/UX Design',
      text: 'Planning, design and prototyping websites and mobile applications using specialized software such as Adobe XD and Figma.'
    },
    {
      icon: faMobileAlt,
      title: 'Mobile Apps',
      text: 'Development of hybrid mobile applications using the React Native framework.'
    },
    {
      icon: faLaptopCode,
      title: 'Web Development',
      text: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.'
    },
  ];

  return (
    <StyledSkillCardList>
      {skills.map((skill, index) => (
        <SkillCard 
          title={skill.title} 
          icon={skill.icon} 
          text={skill.text}
          key={index}
        />
      ))}
    </StyledSkillCardList>
  );
};

export default SkillCardList;