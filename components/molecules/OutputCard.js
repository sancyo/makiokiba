import "../../styles/components/OutputCard.scss";

const OutputCard = (props) => {
  const item = props.value;
  return (
    <div className="output-card">
      <time className="output-date">{item.date}</time>
      <h3 className="output-title">{item.title}</h3>
      <span className="output-type">{item.type}</span>
      <p className="output-desc">{item.desc}</p>
      <div className="tag-list">
        {item.devTag.map((i, id) => {
          return (
            <span className="dev-tag" value={i} key={id}>
              #{i.tag}
            </span>
          );
        })}
      </div>
      <a
        className="output-link"
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.link}
      </a>
    </div>
  );
};

export default OutputCard;
