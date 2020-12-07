import Section from 'components/common/Section/Section';
import SectionTitle from 'components/common/SectionTitle/SectionTitle';
import ProjectCardList from 'components/common/ProjectCardList/ProjectCardList';

import 'components/sections/Portfolio/Portfolio.css';

const Portfolio = props => (
  <Section id="portfolio">
    <SectionTitle text="Portfolio" subtitle="Some things I've built"/>
    <ProjectCardList />
  </Section>
);

export default Portfolio;