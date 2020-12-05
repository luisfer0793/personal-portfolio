import 'components/common/Socialbar/Socialbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedinIn, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

const Socialbar = props => {
  const icons = [
    {
      icon: faGithub,
      ref: 'https://github.com/luisfer0793',
      variant: 'socialbar__icon--github'
    },
    {
      icon: faLinkedinIn,
      ref: 'https://www.linkedin.com/in/luisfernandojimenez93',
      variant: 'socialbar__icon--linkedin'
    },
    {
      icon: faTwitter,
      ref: 'https://twitter.com/fervasr',
      variant: 'socialbar__icon--twitter'
    },
    {
      icon: faInstagram,
      ref: 'https://www.instagram.com/feer_jim23',
      variant: 'socialbar__icon--instagram'
    },
  ];

  return (
    <ul className="socialbar">
      {icons.map((item, index) => (
        <li className="socialbar__item" key={index}>
          <a href={item.ref} target="_blank" rel="noreferrer">
            <FontAwesomeIcon className={['socialbar__icon', item.variant].join(' ')} icon={item.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socialbar;