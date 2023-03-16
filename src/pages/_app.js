import "@/sass/main.css";
import Layout from "../Layout/layout.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
