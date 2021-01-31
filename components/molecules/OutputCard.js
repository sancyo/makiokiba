import "../../styles/components/OutputCard.scss";

const OutputCard = (props) => {
  const item = props.value;
  const link = (link) => {
    if (link === "no") {
      return;
    } else {
      return (
        <a className="link output-link" href={link} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      );
    }
  };
  const githubLink = (gitLink) => {
    if (gitLink === "no") {
      return;
    } else {
      return (
        <a className="link" href={gitLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      );
    }
  };
  const site = item.link === "no" ? "" : "";
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
      {link(item.link)}
      {githubLink(item.github)}
    </div>
  );
};

export default OutputCard;
