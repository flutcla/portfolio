import { HelmetProvider, Helmet } from "react-helmet-async";

export const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home | FlutCla's Portfolio</title>
        </Helmet>
      </HelmetProvider>
      <h1>Home</h1>
    </>
  );
}