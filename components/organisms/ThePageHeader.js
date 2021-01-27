import "../../styles/components/ThePageHeader.scss";

const ThePageHeader = () => {
  return (
    <header className="header-container">
      <div className="header-inner">
        <img className="header-img" src="../../static/top-image.png"></img>
        <h2 className="header-title">makiokiba</h2>
        <p className="header-text">Web開発の技術を中心に勉強しています。</p>
        <a
          href="https://github.com/sancyo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="sns-icon" src="../../static/github.svg"></img>
        </a>
      </div>
    </header>
  );
};

export default ThePageHeader;
