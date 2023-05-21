import React from "react";
import styled from "styled-components";
import { FaGithub } from 'react-icons/fa';
import { Color } from "../color";

interface HeaderProps {
  title: String
}

export const Header: React.FC<HeaderProps> = ({title}) => (
  <SHeaderContainer>
    <SIconLinks>
      <SIcon><a href='https://github.com/flutcla'target='_blank' rel="noreferrer"><FaGithub size="2em"></FaGithub></a></SIcon>
    </SIconLinks>
    <STitle>{title}</STitle>
    <SNav>
      <SNavItem><a href="/">Home</a></SNavItem>
      <SNavItem><a href="/about">About</a></SNavItem>
      <SNavItem><a href="/contact">Contact</a></SNavItem>
    </SNav>
  </SHeaderContainer>
);

const SHeaderContainer = styled.header`
  position: sticky;
  display: flex;
  top: 0;
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-color: ${Color.header};
`;

const SIconLinks = styled.ul`
  display: flex;
  position: absolute;
  left: 0;
  width: 17px;
  height: 50px;
`;

const SIcon = styled.li`
  list-style: none;
  margin: 0 0 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const STitle = styled.h1`
  display: flex;
  position: absolute;
  margin: auto;
`;

const SNav = styled.nav`
  display: flex;
  position: absolute;
  right:0;
  height: 44px;
`;

const SNavItem = styled.li`
  list-style: none;
  margin: 0 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
