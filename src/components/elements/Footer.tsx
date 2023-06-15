import { styled } from "styled-components"
import { Color } from "../Color";

export const Footer = () => {
  return (
    <SFooterContainer>
      <SFooterText><SFooterSpan>&copy; 2023 FlutCla</SFooterSpan><SFooterSpan>Last Update: {lastUpdated}</SFooterSpan></SFooterText>
    </SFooterContainer>
  )
}

const lastUpdated = process.env.REACT_APP_BUILD_DATE || "[ビルド時の最終更新日]"

const SFooterContainer = styled.footer`
  background-color: ${Color.headerBg};
`;

const SFooterText = styled.div`
  padding: 2px
`;

const SFooterSpan = styled.span`
  margin: 0 10px;
`;
