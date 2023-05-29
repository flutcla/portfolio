import { styled } from "styled-components"

export const Footer = () => {
  return (
    <SFooterContainer>
      <SFooterText><SFooterSpan>&copy; 2023 FlutCla</SFooterSpan><SFooterSpan>Last Update: {lastUpdated}</SFooterSpan></SFooterText>
    </SFooterContainer>
  )
}

const lastUpdated = process.env.REACT_APP_BUILD_DATE || "[ビルド時の最終更新日]"

const SFooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 10px;
`;

const SFooterText = styled.div``;

const SFooterSpan = styled.span`
  margin: 0 10px;
`;
