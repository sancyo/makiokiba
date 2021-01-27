import "../../styles/components/SkillCard.scss";

const OutputCard = (props) => {
  const item = props.value;
  return (
    <div className="skill-card">
      <img src={item.img.url} alt={item.name} className="skill-img" />
      <div className="skill-name">{item.name}</div>
    </div>
  );
};

export default OutputCard;
