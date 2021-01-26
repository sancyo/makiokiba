import "../styles/global.scss";

import { Container } from "next/app";
import { useRouter } from "next/router";
import ThePageHeader from "../components/organisms/ThePageHeader";
import ThePageNav from "../components/organisms/ThePageNav";

function MyApp({ Component, pageProps }) {
  const router = useRouter(); //現在のページを取得
  return (
    <div>
      <ThePageHeader />
      <ThePageNav page={router.pathname} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
