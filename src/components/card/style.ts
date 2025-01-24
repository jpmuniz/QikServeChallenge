import styled from "styled-components";
import { contentProps } from './types';

const Container = styled.ul`
    width: 393px;
    height: 190px;
`;

const Content = styled.li`
    width: 104px;
    height: 146px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
`;

const Image = styled.img <{ $isSelected?: boolean }>`
    width: 82px;               
    height: 82px;      
    overflow: hidden;  
    object-fit: cover; 
    image-rendering: -webkit-optimize-contrast;         
    border-radius: 50px;       
    padding: 4px;              
    display: flex;             
    align-items: center;       
    justify-content: center;   
    gap: 10px;                 
    box-sizing: border-box;
    border: ${(props) => (props.$isSelected ? "2px solid black" : "none")} ;
`
const Name = styled.h3 <{ $isSelected?: boolean }>`
   font-weight: 600;          
   font-size: 16px;           
   line-height: 18.75px;      
   letter-spacing: 0.5px;     
   text-align: center;        
   margin: 0;
   border-bottom: ${(props) => (props.$isSelected ? "2px solid black" : "none")} ;                 
`;

export { Container, Content, Image, Name }