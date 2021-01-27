import Head from "next/head";
import "../styles/global.scss";

const Skill = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container main-container">
        <div className="inner main-inner">
          <h2 className="main-title">スキル</h2>
          <div className="skill-card-list"></div>
        </div>
      </main>
    </div>
  );
};
export default Skill;
