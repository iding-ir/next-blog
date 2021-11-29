import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import "../styles/globals.scss";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import store from "../stores";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navbar />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
