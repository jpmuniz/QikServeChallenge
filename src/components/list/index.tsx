
import { ListItem } from '../listItem/index';
import { listProps } from './types';
import { Container } from './style';

const List = ({ items, handleClickSelectItem }: listProps) => {
    
    return (
        <Container>
            {items?.map(item =>(
                <ListItem key={item?.name} listProps={item} handleClickSelectItem={handleClickSelectItem}/>
            ))}
        </Container>
    )
}

export { List }