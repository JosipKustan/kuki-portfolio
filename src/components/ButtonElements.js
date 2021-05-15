import styled from "styled-components";
import { Link } from "react-scroll";
export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#00000A" : "#00A0e3")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#01bf7f" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: centar;
  align-items: center;
  transition: all 0.2 ease-in;

  &:hover {
    transition: all 0.2 ease-in;
    background: ${({ primary }) => (primary ? "#fff" : "#0070e3")};
  }
`;
