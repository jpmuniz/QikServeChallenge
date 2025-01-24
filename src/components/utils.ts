import { menu } from '../menu/types';

const getSectionsMenuItems = (menu: menu | null) => (
     menu?.sections.map(section => (
        {
            name: section.name,
            image: section.images[0].image,
            isSelected: false
        }
    ))
)

export { getSectionsMenuItems }