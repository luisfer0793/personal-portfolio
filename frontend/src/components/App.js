import { useState } from 'react';

import GlobalStyle from 'components/styles/GlobalStyle';

import Header from 'components/sections/Header/Header';
import About from 'components/sections/About/About';
import Skills from 'components/sections/Skills/Skills';
import Blog from 'components/sections/Blog/Blog';
import Portfolio from 'components/sections/Portfolio/Portfolio';
import Contact from 'components/sections/Contact/Contact';

import cv from 'assets/files/CV.pdf';

const App = props => {
  const [isMenuVisible, toggleMenu] = useState(false);

  const toggleMenuHandler = event => {
    console.log('Menu Toggled');
    toggleMenu(prevState => !prevState);
  };

  const resumeHandler = () => {
    window.open(cv, '_blank');
  };

  const emailHandler = () => {
    window.location.href = `mailto:luisfer.0793@gmail.com`;
  };
  
  return (
    <>
      <GlobalStyle />
      <div className="app">
      <Header
        resumeHandler={resumeHandler}
        emailHandler={emailHandler}
        toggleMenuHandler={toggleMenuHandler}
        isMenuVisible={isMenuVisible}
      />
      <About />
      <Skills />
      <Blog />
      <Portfolio />
      <Contact emailHandler={emailHandler}/>
    </div>
    </>
  );
};

export default App;
