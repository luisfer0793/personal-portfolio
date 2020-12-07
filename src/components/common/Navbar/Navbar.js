import Logo from 'components/common/Logo/Logo';
import Button from 'components/common/Button/Button';

import 'components/common/Navbar/Navbar.css';

const links = [
  {
    text: 'About', 
    to: '#about'
  },
  {
    text: 'Blog', 
    to: '#blog'
  },
  {
    text: 'Portfolio', 
    to: '#portfolio'
  },
  {
    text: 'Contact', 
    to: '#contact'
  }
];

const Navbar = ({resumeHandler}) => (
  <nav className="navbar">
    <Logo/>
    <ul className="navbar__list">
      {links.map(({text, to}) => (
        <li className="navbar__list-item" key={text}>
          <a href={to} className="navbar__list-link">{text}</a>
        </li>
      ))}
    </ul>
    <Button label="Resume" handler={resumeHandler}/>
  </nav>
);

export default Navbar;