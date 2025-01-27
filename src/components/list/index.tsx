
import { ListItem } from '../listItem/index';
import { listProps, item } from './types';
import { Container } from './style';

const List = ({ listProps, handleClickSelectItem }: listProps) => {
    console.log("listProps", listProps);
    return (
        <Container>
            {listProps?.map((items :item)=>(
                <ListItem key={items?.id} listProps={items} handleClickSelectItem={handleClickSelectItem}/>
            ))}
        </Container>
    )
}

export { List }