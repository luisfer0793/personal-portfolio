import './App.css';

import Header from 'components/sections/Header/Header';
import About from 'components/sections/About/About';
import Skills from 'components/sections/Skills/Skills';
import Blog from 'components/sections/Blog/Blog';
import Porfolio from 'components/sections/Portfolio/Portfolio';

import cv from 'assets/files/CV.pdf';

const App = props => {

  const resumeHandler = () => {
    window.open(cv, '_blank');
  };
  
  return (
    <div className="app">
      <Header resumeHandler={resumeHandler}/>
      <About />
      <Skills />
      <Blog />
      <Porfolio />
    </div>
  );
};

export default App;
