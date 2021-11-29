import type { AppProps } from "next/app";

import "../styles/globals.scss";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navbar />

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
