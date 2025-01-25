import { useMenu } from '../menu/useMenu';
import { Header } from './header/index';
import { InputSearch } from './inputSearch/index';
import { Carousell } from './carousell/index';
import { ListItem } from './listItem';
import { Footer } from './footer';
import { getSectionsMenuItems, getItemsMenu } from './utils';

const Index =()=> {
    const { menu } = useMenu();
    const sectionsMenu = getSectionsMenuItems(menu);
    const itemsMenu = getItemsMenu(menu);

    return (
        <>
            <Header />
            <InputSearch />
            <Carousell sectionsMenu={sectionsMenu} />
            {
                itemsMenu?.map(item =>(
                    <ListItem key={item.name} listProps={item} />
                ))
            }
            <Footer />
        </>
    )
}

export { Index }