import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 214px;
`;

const Content = styled.div`
    height: 150px;
    background-image: url(${(props) => (props.theme)});
    background-position: center;
    background-repeat: no-repeat; 
`

const NavBar = styled.div`
    display: flex;              
    justify-content: space-between; 
    align-items: center;  
    padding: 0px 16px;
    background-color: ${(props) => (props.theme.navBackgroundColour)};
    color: #FFFFFF;
    line-height: 64px;
    text-align: center;
`;

const Title = styled.h1`
    flex: 1;       
    text-align: center; 
`

export { Container, Content , NavBar, Title }


