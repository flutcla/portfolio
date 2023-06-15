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
          <p>自称エンジニア・FlutCla のポートフォリオサイトです。</p>
          <p>どのような知識・技術があるのかまとめていこうと思っています。</p>
          <p>私が好きなものを散りばめてありますので、是非のんびりと見てください。</p>
        </SDivInner>
      </SDivAboutContainer>
      <SDivAboutMeContainer>
        <SDivInner>
          <SH1>About Me</SH1>
          <p>FlutCla と申します。ふるくらと読みます。Flute と Clarinet が由来です。</p>
          <p>現在、東京工業大学 情報理工学院 数理・計算科学コースの修士1年です。</p>
          <p>プログラミング言語理論に関して広く勉強しています。</p>
          <p>まだ広く浅いので、広く深くなれるよう精進していきます。</p>
        </SDivInner>
      </SDivAboutMeContainer>
      <SDivLikeContainer>
        <SDivInner>
          <SH1>Like</SH1>
          <p>私が好きなものをランダムに4つ表示します。クリックすると詳細が見られます。</p>
          <p>TODO: ここを実装する</p>
        </SDivInner>
      </SDivLikeContainer>
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

const SDivAboutMeContainer = styled(SDiv)`
  background-image: url(${aboutBg});
  background-size: cover;
  background-position: 0px -90px;
`
const SDivLikeContainer = styled(SDiv)`
  background-image: url(${aboutBg});
  background-size: cover;
  background-position: 0px -90px;
`

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
