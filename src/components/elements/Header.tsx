import React from "react";
import styled from "styled-components";
import { FaGithub } from 'react-icons/fa';
import { Color } from "../Color";

interface HeaderProps {
  title: String
}

export const Header = ({title} : HeaderProps) => (
  <SHeaderContainer>
    <SIconLinks>
      <SIcon>
        <SIconA href='https://github.com/flutcla' target='_blank' rel="noreferrer"><FaGithub size="2em"></FaGithub></SIconA>
      </SIcon>
    </SIconLinks>
    <STitle><STitleLink href="/portfolio">{title}</STitleLink></STitle>
    <SNav>
      <SNavItem><SNavItemLink href="/portfolio">Home</SNavItemLink></SNavItem>
      <SNavItem><SNavItemLink href="/portfolio/about">About</SNavItemLink></SNavItem>
      <SNavItem><SNavItemLink href="/portfolio/contact">Contact</SNavItemLink></SNavItem>
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
  background-color: ${Color.headerBg};
  font-family: 'Gruppo';
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

const SIconA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  &:link{
    color: ${Color.headerText};
  }
  &:visited{
    color: ${Color.headerText};
  }
  &:hover{
    color: ${Color.aliceBlue}
  }
`;

const STitle = styled.h1`
  display: flex;
  position: absolute;
  margin: auto;
`;

const STitleLink = styled.a`
  text-decoration:none;
  &:link{
    color: ${Color.headerText};
  }
  &:visited{
    color: ${Color.headerText};
  }
  &:hover{
    color: ${Color.aliceBlue}
  }
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
  text-decoration: none;
  font-weight: bold;
  font-size: 120%;

  &:link{
    color: ${Color.headerText};
  }
  &:visited{
    color: ${Color.headerText};
  }
  &:hover{
    color: ${Color.aliceBlue}
  }
`;
