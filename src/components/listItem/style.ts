import styled from "styled-components";

const Container = styled.ul`
    width: 393px;
    height: auto;
    padding: 16px;
    list-style-type: none;
`;

const Content = styled.li`
    width: 393px;
    height: auto;
}

`;

const Item = styled.div<{$isVisible: boolean}>`
    display: ${(props) => (props.$isVisible ? "flex" : "none")}   ;
    justify-content: space-between;
    padding: 16px 0px 16Px 0px;
    gap: 16px;
    cursor: pointer;

`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    h6 {
        font-size: 16px;
        color: #464646;
        font-weight: 500;
        line-height: 18.75px;
    }
    
    p {
        margin-top: 4px;
        color: #464646;
        font-size: 16px;
        font-weight: 300;
        line-height: 18.75px;
    }

`;

const ContainerNameList = styled.div`
    width: 217px;
    height: 18px;
    display: flex;
    align-items: center;

    && strong {
       width: 18px;
       height: 18px;
       border-radius: 4px;
       padding: 1px 4px;
       background-color: #4F372F;
       color: #ffffff;
       box-sizing: border-box;
    }

    h3 {
        overflow: hidden;
        margin-left: 8px;
        text-overflow: ellipsis;
        white-space: nowrap; 
        font-size: 16px;
        color: #121212;
        font-weight: 500;
    }
`;

const Image = styled.img`
    max-width: 128px;
    width: 100%;         
    height: auto;         
    border-radius: 4px;          
    object-fit: cover;
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Header = styled.h1`
    font-size: 24px;
`


export { Container, Content, Item, Description, Image, Header, HeaderContainer, ContainerNameList }