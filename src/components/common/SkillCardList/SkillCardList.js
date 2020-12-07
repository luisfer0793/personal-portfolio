import {faAnchor, faMobileAlt, faLaptopCode} from '@fortawesome/free-solid-svg-icons';

import SkillCard from 'components/common/SkillCard/SkillCard';

import 'components/common/SkillCardList/SkillCardList.css';

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
      text: 'Development of hybrid mobile applications using the React Native framework'
    },
    {
      icon: faLaptopCode,
      title: 'Web Development',
      text: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.'
    },
  ];

  return (
    <div className="skillcard__list">
      {skills.map((skill, index) => (
        <SkillCard 
          title={skill.title} 
          icon={skill.icon} 
          text={skill.text}
          key={index}
        />
      ))}
    </div>
  );
};

export default SkillCardList;