import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>To Do App</title>
        <link rel="icon" href="/todo-favicon.png"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
