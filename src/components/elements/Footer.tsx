import { styled } from "styled-components"

export const Footer = () => {
  return (
    <SFooterContainer>
      <div>&copy; 2023 FlutCla</div>
    </SFooterContainer>
  )
}

const SFooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 10px;
`;
