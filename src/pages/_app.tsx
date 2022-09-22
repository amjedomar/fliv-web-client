import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
// import "aos/dist/aos.css";
import "../styles/features.css";
import FeaturesSplit from "../components/FeaturesSplit";
// import { useEffect } from "react";
// import AOS from "aos";

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
  // useEffect(() => {
  //   AOS.init({
  //     once: true,
  //     disable: "phone",
  //     duration: 500,
  //     easing: "ease-out-cubic",
  //   });
  // });

  return <FeaturesSplit />
  // return (
  //   <ThemeProvider theme={theme}>
  //     <Component {...pageProps} />
  //   </ThemeProvider>
  // );
}

export default MyApp;
