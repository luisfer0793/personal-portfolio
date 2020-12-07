import 'components/sections/Blog/Blog.css';

import Section from 'components/common/Section/Section';
import SectionTitle from 'components/common/SectionTitle/SectionTitle';

const Blog = props => (
  <div className="blog__canvas">
    <Section id="blog">
      <SectionTitle text="Blog" subtitle="Latest News" variant="light"/>
      <h3 className="blog__title">Comming Soon!</h3>
    </Section>
  </div>
);

export default Blog;