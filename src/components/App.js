import './App.css';

import Header from 'components/sections/Header/Header';
import About from 'components/sections/About/About';
import Skills from 'components/sections/Skills/Skills';
import Blog from 'components/sections/Blog/Blog';
import Porfolio from 'components/sections/Portfolio/Portfolio';
import Contact from 'components/sections/Contact/Contact';

import cv from 'assets/files/CV.pdf';

const App = props => {

  const resumeHandler = () => {
    window.open(cv, '_blank');
  };

  const emailHandler = () => {
    window.location.href = `mailto:luisfer.0793@gmail.com`;
  };
  
  return (
    <div className="app">
      <Header resumeHandler={resumeHandler} emailHandler={emailHandler}/>
      <About />
      <Skills />
      <Blog />
      <Porfolio />
      <Contact emailHandler={emailHandler}/>
    </div>
  );
};

export default App;
