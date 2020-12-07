import Navbar from 'components/common/Navbar/Navbar';
import Socialbar from 'components/common/Socialbar/Socialbar';
import Hero from 'components/sections/Hero/Hero';

import 'components/sections/Header/Header.css';

const Header = ({resumeHandler}) => {
  return (
    <header className="header">
      <Hero />
      <Navbar resumeHandler={resumeHandler}/>
      <Socialbar />
    </header>
  );
};

export default Header;