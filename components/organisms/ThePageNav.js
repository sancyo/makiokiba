import Link from "next/link";
import "../../styles/components/ThePageNav.scss";

const ThePageNav = (props) => {
  return (
    <nav className="nav-container">
      <ul className="nav-inner">
        <li className={props.page === "/" ? "nav-item active" : "nav-item"}>
          <Link href="/">
            <a>
              <img
                className="nav-img"
                src="../../static/top-image.png"
                alt="制作物"
              />
              <span className="nav-text">制作物</span>
            </a>
          </Link>
        </li>
        <li
          className={props.page === "/career" ? "nav-item active" : "nav-item"}
        >
          <Link href="/career">
            <a>
              <img
                className="nav-img"
                src="../../static/top-image.png"
                alt="経歴"
              />
              <span className="nav-text">経歴</span>
            </a>
          </Link>
        </li>
        <li className={props.page === "/more" ? "nav-item active" : "nav-item"}>
          <Link href="/more">
            <a>
              <img
                className="nav-img"
                src="../../static/top-image.png"
                alt="スキル"
              />
              <span className="nav-text">More</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ThePageNav;
