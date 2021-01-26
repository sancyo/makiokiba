import "../styles/global.scss";

import { Container } from "next/app";
import ThePageHeader from "../components/organisms/ThePageHeader";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <ThePageHeader />
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
