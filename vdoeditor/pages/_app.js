import { AppProps } from "next/app";

const App = ({ Component, pageProps }) => {
   return (
      <Component {...pageProps} />
   );
};

export default App;