import Head from "next/head";
import OutputCard from "../components/molecules/OutputCard";
import "../styles/global.scss";
import "../styles/pages/index.scss";

export default function Home({ output }) {
  const outputArray = output.slice();
  console.log(outputArray);
  console.log("hoge");
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container main-container">
        <div className="inner main-inner">
          <h2 className="main-title">制作物</h2>
          <div className="output-card-list">
            {outputArray.map((item) => {
              return <OutputCard value={item} key={item.id} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch(
    "https://designdock02.microcms.io/api/v1/output",
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      output: data.contents,
    },
  };
};
