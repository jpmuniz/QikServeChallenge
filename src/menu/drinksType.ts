import { AvailabilityType } from './types';

type image = {
    id : number,
    image: string
}

type drinkItens = {
    id: number,
    name: string,
    alcoholic: number,
    price: number,
    position: number,
    visible: number,
    availabilityType: AvailabilityType,
    sku: string,
    available: boolean
}


type drinks = {
    id: number,
    name :string,
    position: number,
    visible :number,
    images:[
       image
   ],
    items:[
       drinkItens
   ]
}

export type { drinks }