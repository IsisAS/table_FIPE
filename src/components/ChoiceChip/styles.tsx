import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ContainerChip = styled.button<{ selected: boolean }>`
    ${(props) => css`
        background-color: ${props.selected ? 'blue' : 'gray'};
        border:none;
        max-width: 70px;
        padding: 5px;
        border-radius: 1000px;
        color:white ;
    `}
    
`