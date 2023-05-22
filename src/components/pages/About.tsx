import { Helmet, HelmetProvider } from "react-helmet-async";

export const About = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>About | FlutCla's Portfolio</title>
        </Helmet>
      </HelmetProvider>
      <h1>About</h1>
    </>
  );
}