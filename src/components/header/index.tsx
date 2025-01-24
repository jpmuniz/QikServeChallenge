import { IoMdMenu } from "react-icons/io";
import { useTheme } from 'styled-components';
import { Container, Content, NavBar, Title } from './style';

const Header =()=> {
    const { webSettings } = useTheme()
    const navBarProps = {
        backgroundColour: webSettings.backgroundColour,
        navBackgroundColour: webSettings.navBackgroundColour,
        primaryColour: webSettings.primaryColour,
        primaryColourHover: webSettings.primaryColourHover
    };
    const containerImage = webSettings.bannerImage;

    return (
        <Container>
            <NavBar theme={navBarProps}>
                <Title>Menu</Title>
                <IoMdMenu size={28}/>
            </NavBar>
            <Content theme={containerImage}>
            </Content>
        </Container>
    )
}

export { Header }