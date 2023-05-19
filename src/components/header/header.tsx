import React from "react";

interface HeaderProps {
  title: String
}

const Header: React.FC<HeaderProps> = ({title}) => (
  <header>
    <nav>
      <h1>{title}</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;

