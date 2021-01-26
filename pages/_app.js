import "../styles/global.scss";

import { Container } from "next/app";
import ThePageHeader from "../components/organisms/ThePageHeader";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThePageHeader />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
