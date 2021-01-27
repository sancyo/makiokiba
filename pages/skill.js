import Head from "next/head";
import SkillCard from "../components/molecules/SkillCard";
import "../styles/global.scss";
import "../styles/pages/skill.scss";

const More = ({ skill }) => {
  const skillArray = skill.slice();
  const normalSkillArray = skillArray.filter((item) => item.type === "中級");
  const easySkillArray = skillArray.filter((item) => item.type === "初級");
  const schoolSkillArray = skillArray.filter((item) => item.type === "学校");
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container main-container">
        <div className="inner main-inner">
          <h2 className="main-title">スキル</h2>
          <div className="skill-card-inner">
            <h3 className="skill-type">開発で使用</h3>
            <div className="skill-card-list">
              {normalSkillArray.map((item) => {
                return <SkillCard value={item} key={item.id} />;
              })}
            </div>
          </div>
          <div className="skill-card-inner">
            <h3 className="skill-type">勉強中</h3>
            <div className="skill-card-list">
              {easySkillArray.map((item) => {
                return <SkillCard value={item} key={item.id} />;
              })}
            </div>
          </div>
          <div className="skill-card-inner">
            <h3 className="skill-type">大学で使用</h3>
            <div className="skill-card-list">
              {schoolSkillArray.map((item) => {
                return <SkillCard value={item} key={item.id} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const skill = await fetch(
    "https://designdock02.microcms.io/api/v1/skill?limit=100",
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      skill: skill.contents,
    },
  };
};
export default More;
