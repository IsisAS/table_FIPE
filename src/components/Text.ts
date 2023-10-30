import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Text = styled.p<{ size?: string; color?: string }>`
  ${(props) => css`
    margin: 0;
    font-family: Roboto;
    font-size: ${props.size ? props.size : "14px"};
    color: ${props.color ? props.color : "black"};
  `}
`;
