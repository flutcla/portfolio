import { HelmetProvider, Helmet } from "react-helmet-async";
import { styled } from "styled-components";
import aboutBg from "../../random/haskell/MonadMaybe.png";

export const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home | FlutCla's Portfolio</title>
        </Helmet>
      </HelmetProvider>
      <SDivAboutContainer>
        <SDivInner>
          <SH1>About This Site</SH1>
          <p>(自称)未来のエンジニア FlutCla のポートフォリオサイトです。</p>
          <p>どのような知識・スキルがあるのかまとめていこうと思っています。</p>
          <p>私が好きなものを散りばめてありますので、是非のんびりと見てください。</p>
        </SDivInner>
      </SDivAboutContainer>
    </>
  );
}

const SDiv = styled.div`
  padding: 20px;
`;

const SDivAboutContainer = styled(SDiv)`
  background-image: url(${aboutBg});
  background-size: cover;
  background-position: 0px -90px;
`;

const SDivInner = styled.div`
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
`;

const SH1 = styled.h1`
  font-family: "Zen Maru Gothic";
  font-size: 40px;
  margin: 10px;
`;
