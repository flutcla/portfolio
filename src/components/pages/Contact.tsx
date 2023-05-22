import { HelmetProvider, Helmet } from "react-helmet-async";

export const Contact = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Contact | FlutCla's Portfolio</title>
        </Helmet>
      </HelmetProvider>
      <h1>Contact</h1>
    </>
  );
}