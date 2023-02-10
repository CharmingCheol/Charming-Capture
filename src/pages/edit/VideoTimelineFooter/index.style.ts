import styled from "styled-components";

export const Footer = styled.footer`
  position: relative;

  .drag-area {
    position: absolute;
    width: 100%;
    height: 4px;
    opacity: 0;
    cursor: row-resize;
  }
`;
