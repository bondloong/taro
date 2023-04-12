import "../styles/globals.css";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import store from "../app/store";
import Layout from "../components/Layout/Layout";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
