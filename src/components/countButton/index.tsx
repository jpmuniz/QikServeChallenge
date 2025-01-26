import { buttonProps } from './types';
import { Container } from './style';

const CountButton = ({ backgroundColor, color, Icon ,onClick }: buttonProps)=> (
    <Container 
        onClick={onClick} 
        $backgroundColor={backgroundColor}
        $color={color}
        >
        <Icon />
    </Container>
)

export { CountButton }