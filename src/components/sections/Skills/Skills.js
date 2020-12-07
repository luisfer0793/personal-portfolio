import Section from 'components/common/Section/Section';
import SectionTitle from 'components/common/SectionTitle/SectionTitle';
import SkillCardList from 'components/common/SkillCardList/SkillCardList';

const Skills = props => (
  <>
    <Section id="#skills">
    <SectionTitle text="Skills" subtitle="What can i do?" />
      <SkillCardList />
    </Section>
  </>
);

export default Skills;