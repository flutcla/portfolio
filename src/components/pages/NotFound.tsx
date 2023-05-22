import { HelmetProvider, Helmet } from "react-helmet-async";

export const NotFound = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>404 | FlutCla's Portfolio</title>
        </Helmet>
      </HelmetProvider>
      <h1>404</h1>
      <h3>お探しのページは見つかりませんでした。</h3>
    </>
  );
}