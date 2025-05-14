import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "./components/Header";
import { Nunito } from "next/font/google";
import Head from "next/head";
import { Footer } from "./components/Footer";

const nunito = Nunito({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>HelloJennPark</title>
      </Head>
      <main className={nunito.className}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </div>
  );
}
