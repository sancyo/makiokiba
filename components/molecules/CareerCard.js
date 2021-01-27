import "../../styles/components/CareerCard.scss";

const OutputCard = (props) => {
  const item = props.value;
  return (
    <div className="career-card">
      <time className="career-period">{item.period}</time>
      <h3 className="career-title">{item.title}</h3>
      <p className="career-desc">{item.desc}</p>
    </div>
  );
};

export default OutputCard;
