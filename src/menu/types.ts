import { burgers } from './burgerType';
import { desserts } from './dessertsType';
import { drinks } from './drinksType';

enum AvailabilityType {
    availabilityNow = "AVAILABLE_NOW"
}

type menu = {
    id: number,
    name: string,
    type: string,
    collapse: number,
    sections:[
        burgers,
        drinks,
        desserts
    ]
}

type sectionsMenuType = {
    sections:[
        burgers,
        drinks,
        desserts
    ]
}

type menuType = {
    menu: menu | null,
    loading: boolean,
    error: string | null,
}

type errorDataMenu = {
    message: string;
}


 export type { menuType, menu, errorDataMenu, AvailabilityType, sectionsMenuType }