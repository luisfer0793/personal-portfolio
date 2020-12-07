import 'components/common/SectionTitle/SectionTitle.css';

const SectionTitle = ({text, subtitle, variant}) => {
  return (
    <div className={["section-title__container", variant].join(' ')}>
      <h6 className="section-title--accent">{subtitle}</h6>
      <span className="section-title--shadow">{text}</span>
      <h2 className="section-title">
        {text}.
      </h2>
    </div>
  );
};

export default SectionTitle;