import React from "react";
import styled from "styled-components";

const Title = styled.div`
  margin: 0;
  cursor: pointer;
  width: fit-content;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }

  & * {
    transition: all 0.5s;
  }

  & h1 {
    color: ${(props) => props.themeColor ?? "white"};
    margin-bottom: 0;
    
    :before {
      color: ${(props) => props.asideColor ?? "white"};
      content: "{ ";
    }

    :after {
      color: ${(props) => props.asideColor ?? "white"};
      content: " }";
      margin-right: 1rem;
    }
  }

  i:active {
    animation: scale-big 3s linear forwards;
  }
`;

export const TitleSection = (props) => {

  return (
    <Title onClick={props.onClick} themeColor={props.themeColor} className="mb-4 d-flex align-items-center">
      <h1>{props.children}</h1>
      {/* <i className="fa-solid fa-gear gear mt-1 mt-md-2"></i> */}
    </Title>
  );
};
