import { Header } from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Nunito } from "next/font/google";
import Head from "next/head";

const nunito = Nunito({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/logo.png" />
        <title>HelloJennPark</title>
      </Head>
      <main className={nunito.className}>
        <Header />
        <Component {...pageProps} />
      </main>
    </div>
  );
}
