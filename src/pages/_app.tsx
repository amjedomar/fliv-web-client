import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import "../styles/index.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Head from "next/head";

declare module "@emotion/react" {
  export interface Theme {
    palette: {
      primary: {
        light: string;
        main: string;
        dark: string;
      };
    };
  }
}

const theme = {
  palette: {
    primary: {
      light: "#6593e3",
      main: "#2b66b1",
      dark: "#003c81",
    },
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  });

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="theme-color" content={theme.palette.primary.main} />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
