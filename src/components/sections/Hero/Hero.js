import {Parallax, Background} from 'react-parallax'; 

import Button from 'components/common/Button/Button';

import bgImage from 'assets/images/hero-bg.jpg';

import 'components/sections/Hero/Hero.css';

const Hero = ({emailHandler}) => {
  return (
    <div className="hero">
      <div className="hero__headings">
        <div className="hero__title-container">
          <h1 className="hero__title">UI/UX Designer &amp; Web Developer</h1>
          <h2 className="hero__subtitle">Luis Fernando Jiménez</h2>
          <p className="hero__text">
            Hi, nice to meet you, welcome to my website.
            <br />
            Here you will find who I am, a portfolio of various projects in which I have participated and also a blog where I like to share some tips and tricks on web design and development.
            <br />
            Do you want to keep in touch? Send me a message and I will contact you.
          </p>
          <br />
          <Button label="Contact Me" handler={emailHandler}/>
        </div>
      </div>
      <Parallax strength={300}>
        <Background>
          <img src={bgImage} alt="portfolio cover" className="hero__image"/>
        </Background>
      </Parallax>
    </div>
  );
};
export default Hero;