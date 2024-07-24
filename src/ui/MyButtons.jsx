import styled, { css } from 'styled-components'

export const MyButtons = styled.button`
    /* background-color: red; */
    color: white;
    padding: 10px 10px;
    border-radius: 5px;
    border: 1px;
    min-width: 200px;
    font-size: large;

    ${props => props.primary && css`
        background: maroon;
        color: #fff;
    `}

    ${props => props.secondary && css`
        background: white;
        color: black;
    `}

    ${props => props.red && css`
        background: red;
        color: #fff;
    `}

    ${props => props.green && css`
        background: green;
        color: #fff;
    `}
`;