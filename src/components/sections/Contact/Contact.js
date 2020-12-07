import Section from 'components/common/Section/Section';
import SectionTitle from 'components/common/SectionTitle/SectionTitle';
import Button from 'components/common/Button/Button';

import 'components/sections/Contact/Contact.css';

const Contact = ({emailHandler}) => (
  <div className="contact">
    <Section id="contact">
      <SectionTitle text="Contact" subtitle="Get in Touch" variant="light" />
      <p className="contact__text">Let's talk about your next proyect, whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
      <Button label="Send me an Email" handler={emailHandler} variant="white"/>
    </Section>
  </div>
);

export default Contact;