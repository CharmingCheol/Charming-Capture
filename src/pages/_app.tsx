import type { AppProps } from "next/app";
import StyleReset from "@/styles/StyleReset";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyleReset />
      <Component {...pageProps} />
    </>
  );
}

export default App;
