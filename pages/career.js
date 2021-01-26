import Head from "next/head";
import CareerCard from "../components/molecules/CareerCard";

import "../styles/global.scss";
import "../styles/pages/career.scss";

const Career = ({ career }) => {
  const careerArray = career.slice();
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container main-container">
        <div className="inner main-inner">
          <h2 className="main-title">経歴</h2>
          <div className="career-card-list">
            {careerArray.map((item) => {
              return <CareerCard value={item} key={item.id} />;
            })}
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
  const data = await fetch(
    "https://designdock02.microcms.io/api/v1/career",
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      career: data.contents,
    },
  };
};

export default Career;
