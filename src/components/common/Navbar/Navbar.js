import {BrowserRouter, Link} from 'react-router-dom';

import Logo from 'components/common/Logo/Logo';
import Button from 'components/common/Button/Button';

import 'components/common/Navbar/Navbar.css';

const links = [
  {text: 'Home', to: '/'}, 
  {text: 'About', to: '/about'}, 
  {text: 'Blog', to: '/blog'}, 
  {text: 'Portfolio', to: '/portfolio'}, 
  {text: 'Contact', to: '/contact'}
];

const Navbar = props => (
  <BrowserRouter>
    <nav className="navbar">
      <Logo/>
      <ul className="navbar__list">
        {links.map(({text, to}) => (
          <li className="navbar__list-item" key={text}>
            <Link className="navbar__list-link" to={to}>{text}</Link>
          </li>
        ))}
      </ul>
      <Button label="Resume"/>
    </nav>
  </BrowserRouter>
);

export default Navbar;