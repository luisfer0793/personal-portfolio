import './App.css';

import Header from 'components/sections/Header/Header';
import About from 'components/sections/About/About';
import Skills from 'components/sections/Skills/Skills';

const App = props => {

  return (
    <>
      <Header />
      <About />
      <Skills />
    </>
  );
};

export default App;
