import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div``;

const Title = styled.span``;

const Grid = styled.div``;

const Section = ({ title, children }) => {
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>;
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
