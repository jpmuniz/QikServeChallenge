import { useState } from 'react';
import { useMenu } from '../menu/useMenu';
import { Header } from './header/index';
import { InputSearch } from './inputSearch/index';
import { Carousell } from './carousell/index';
import { List } from './list/index';
import { ItemPage } from './itemPage';
import { Footer } from './footer';
import { getSectionsMenuItems, getItemsMenu } from './utils';
import { item } from './listItem/types';

const Index =()=> {
    const { menu } = useMenu();
    const [itemSelected, setItemSelected] = useState<item>(null);
    const sectionsMenu = getSectionsMenuItems(menu);
    const itemsMenu = getItemsMenu(menu);
    const handleClick = (item: item) => setItemSelected(item);
    const removeItemSelected =()=> {
        setItemSelected(null);
    }
    console.log("menu", itemsMenu);
    return (
        <>
            {!itemSelected ? 
            <>
                <Header />
                <InputSearch />
                <Carousell sectionsMenu={sectionsMenu} />
                <List items={itemsMenu} handleClickSelectItem={handleClick}/>
                <Footer />   
            </>         
            :
            <ItemPage item={itemSelected} removeItemSelected={removeItemSelected} />
            }
        </>
    )
}

export { Index }