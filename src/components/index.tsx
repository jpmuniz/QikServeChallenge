import { useState } from 'react';
import { useMenu } from '../menu/useMenu';
import { Header } from './header/index';
import { InputSearch } from './inputSearch/index';
import { Carousell } from './carousell/index';
import { ListItem } from './listItem';
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

    return (
        <>
            {!itemSelected ? 
            <>
                <Header />
                <InputSearch />
                <Carousell sectionsMenu={sectionsMenu} />
                {
                    itemsMenu?.map(item =>(
                        <ListItem key={item.name} listProps={item} handleClickSelectItem={handleClick}/>
                    ))
                }
                <Footer />   
            </>         
            :
            <ItemPage item={itemSelected} removeItemSelected={removeItemSelected} />
            }
        </>
    )
}

export { Index }