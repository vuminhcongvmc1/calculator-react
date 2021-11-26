import styled, { createGlobalStyle, css } from "styled-components";

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const borderRadius = css`
  border-radius: 0.25rem;
`;

const boxShadow = (color = "#CDCDCD", size = "0.1rem") => {
  return css`
    box-shadow: 0 0 ${size} ${size} ${color};
  `;
};

export const GlobalStyle = createGlobalStyle`
  #root {
    width: 100vw;
    height: 100vh;
    ${flexCenter}
  }

  a {
    text-decoration: none;
  }
`;

export const Box = styled.div`
  padding: 0.5rem;
  ${borderRadius}
  ${boxShadow(undefined, "0.2rem")}
`;

export const Result = styled.div`
  padding: 0.5rem;
  ${borderRadius}
  text-align: right;
  border: 1.5px solid #cdcdcd;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

export const Controls = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto;

  & :nth-child(1),
  & :nth-child(4n + 1) {
    margin-left: 0;
  }

  & :nth-child(4n) {
    margin-right: 0;
  }
`;

export const ControlItem = styled.li`
  width: 4rem;
  height: 3rem;
  margin: 0.25rem;
`;

export const StyledButton = styled.button`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;

  ${(props) => {
    const defaultCSS = css`
      cursor: pointer;
      ${borderRadius};
      font-size: 1.25rem;

      &:hover {
        border: none;
        ${props.type === "equal" ? boxShadow("#4285F4") : boxShadow()}
      }
    `;

    switch (props.type) {
      case "none": {
        return css`
          background-color: transparent;
        `;
      }
      case "number": {
        return css`
          ${defaultCSS}
          background-color: transparent;
          border: 1.5px solid #cdcdcd;
        `;
      }
      case "operator": {
        return css`
          ${defaultCSS}
        `;
      }
      case "equal": {
        return css`
          ${defaultCSS}
          background-color: #4285F4;
          color: white;
        `;
      }
      default: {
        return css``;
      }
    }
  }}
`;
