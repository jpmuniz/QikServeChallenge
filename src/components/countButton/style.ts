import styled from "styled-components";

const Container = styled.button <{ $backgroundColor: string, $color: string }>`
    width: 32px;
    height: 32px;
    background-color: ${(props) => (props.$backgroundColor)};
    color: ${(props) => (props.$color)};
    border: none;
    border-radius: 20px;
    cursor: pointer;
`;

export { Container }