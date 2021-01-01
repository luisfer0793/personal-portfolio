import Section from 'components/common/Section/Section';
import SectionTitle from 'components/common/SectionTitle/SectionTitle';

import profile from 'assets/images/about-profile.jpg';

import 'components/sections/About/About.css';

const About = props => {
  return (
    <Section id="about">
      <SectionTitle text="About" subtitle="Who am I?" />
      <div className="about__grid">
        <div className="about__info-container">
          <p className="about__info-text">
            Hi, I'm Fernando Jimenez and I'm a web developer and designer from Mexico City.
            <br/><br/>
            I enjoy making projects that can be seen by many people around the world, I like to make the projects from planning and design, through development and ending with the release to production phase.
            <br/><br/>
            I like to make applications and websites using the most modern technologies implementing Mobile First and Desktop First design philosophies.
            <br/><br/>
            Here are a few technologies I've been working with recently: 
          </p>
          <br/>
          <ul className="about__skill-list">
            <li>Javascript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>HTML / SASS</li>
            <li>Mongo DB</li>
            <li>Express</li>
          </ul>
        </div>
        <div className="about__image-container">
          <figure className="about__figure">
            <img src={profile} alt="selfie profile" className="about__image" />
          </figure>
        </div>
      </div>
    </Section>
  );
};

export default About;
