import 'components/common/Section/Section.css';

const Section = ({id, children}) => (
  <section className="section" id={id}>
    {children}
  </section>
);

export default Section;