import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Container = styled.div` 
    position: relative;
    display: flex;
    align-itens: center;
    margin: 0 auto;
    margin-top: 16px;
    width: 319.12px;       
    height: 40px;          
    padding: 10px 15px; 
    border: 1px solid #ccc; 
    border-radius: 5px;    
    gap: 9.12px;     
    color: #8A94A4;      
    font-size: 16px;       
    box-sizing: border-box; 
    outline: none;

    svg {
        cursor: pointer; 
        margin-right: 10px;
    }
`;

const SearchIcon = styled(FaSearch)`
    && {
        color: #8A94A4;
        size: 14px;
    }
`;

const Input = styled.input`
    border: none;
    outline: none;
`;

export { Container, Input, SearchIcon }