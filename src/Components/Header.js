import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyleHeader = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const StyleList = styled.ul`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const Item = styled.li`
  width: 80px;

  &::not(:last-child) {
    margin-right: 50px;
  }
`;

const StyleLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => (
  <StyleHeader>
    <StyleList>
      <Item>
        <StyleLink to="/">Movies</StyleLink>
      </Item>
      <Item>
        <StyleLink to="/tv">TV</StyleLink>
      </Item>
      <Item>
        <StyleLink to="/search">Search</StyleLink>
      </Item>
    </StyleList>
  </StyleHeader>
);

export default Header;
