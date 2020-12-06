import Section from 'components/common/Section/Section';
import SectionTitle from 'components/common/SectionTitle/SectionTitle';
import SkillCardList from 'components/common/SkillCardList/SkillCardList';

const Skills = props => (
  <>
    <SectionTitle text="Skills" subtitle="What can i do?"/>
    <Section>
      <SkillCardList />
    </Section>
  </>
);

export default Skills;