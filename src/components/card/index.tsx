import { Container, Content ,Image, Name } from './style';
import { cardProps } from './types';

const Card =({ image, name, isSelected, handleClick }: cardProps) => (
    <Container>
        <Content onClick={handleClick}>
            <Image $isSelected={isSelected} src={image} alt={name}/>
            <Name $isSelected={isSelected}>{name}</Name>
        </Content>
    </Container>
)


export { Card }