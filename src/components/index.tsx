import { useMenu } from '../menu/useMenu';
import { Header } from './header/index';
import { InputSearch } from './inputSearch/index';
import { Carousell } from './carousell/index';
import { ListItem } from './menuListItem';
import { getSectionsMenuItems } from './utils';

const Index =()=> {
    const { menu } = useMenu();
    const sectionsMenu = getSectionsMenuItems(menu);
    
    return (
        <>
            <Header />
            <InputSearch />
            <Carousell sectionsMenu={sectionsMenu}/>
            <ListItem/>
        </>
    )
}

export { Index }