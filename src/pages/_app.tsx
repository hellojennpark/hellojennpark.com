import { Header } from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const { initializeTime, isClientInitialized, backgroundColor } =
    useTimeThemeStore();
  useEffect(() => {
    initializeTime();
  }, [initializeTime]);

  if (!isClientInitialized) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Loader2 className="h-10 w-10 animate-spin text-gray-500" />
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <link rel="icon" href="/logo.png" />
        <title>HelloJennPark</title>
      </Head>
      <main className={nunito.className} style={{ backgroundColor }}>
        <Header />
        <Component {...pageProps} />
      </main>
      <Analytics />
    </div>
  );
}
