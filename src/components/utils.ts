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

const getItemsMenu = (menu: menu | null) => (
    menu?.sections.map(item => (
        {
            name: item.name,
            items: item.items
        }
    ))
);

const applyEllipsis = (text: string, maxLength: number) => (
    text?.length > maxLength ? text?.slice(0, maxLength) + "..." : text
);

const formatPrice = (value: number, locale: string = "pt-BR", currency: string = "BRL"): string => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(value);
};

export { getSectionsMenuItems, getItemsMenu, applyEllipsis, formatPrice }