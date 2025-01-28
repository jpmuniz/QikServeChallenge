import { Button } from '../button/index';
import { footerProps } from './types';
import { Container, ButtonContainer } from './style';


const Footer = ({ amount }: footerProps) => {
    const HAS_AMOUNT = !!amount;
    return (
        <Container>
            <a href='#'>View allergy information</a>
            <ButtonContainer>
                {HAS_AMOUNT && <Button text={`Your basket ${amount}`}/>}
            </ButtonContainer>
        </Container>
    )
}

export { Footer }