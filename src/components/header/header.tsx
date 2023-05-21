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
      <SNavItem><SNavItemLink href="/">Home</SNavItemLink></SNavItem>
      <SNavItem><SNavItemLink href="/about">About</SNavItemLink></SNavItem>
      <SNavItem><SNavItemLink href="/contact">Contact</SNavItemLink></SNavItem>
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
  margin: 0 10px 0 0;
`;

const SNavItem = styled.li`
  list-style: none;
  display: flex;
  height: 44px;
`;

const SNavItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 10px;
`;
