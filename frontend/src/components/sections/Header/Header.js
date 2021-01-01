import Socialbar from 'components/common/Socialbar/Socialbar';
import {
  SliderMenu,
  Navbar } from 'components/common';
import Hero from 'components/sections/Hero/Hero';

import 'components/sections/Header/Header.css';

const Header = ({resumeHandler, emailHandler, toggleMenuHandler, isMenuVisible}) => {
  return (
    <header className="header">
      <Hero emailHandler={emailHandler}/>
      <Navbar
        resumeHandler={resumeHandler}
        toggleMenuHandler={toggleMenuHandler}
      />
      <Socialbar />
      <SliderMenu
        isVisible={isMenuVisible}
        toggleHandler={toggleMenuHandler}
      />
    </header>
  );
};

export default Header;