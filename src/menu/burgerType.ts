import { AvailabilityType} from './types';

type image = {
    id : number,
    image: string
}

type burgerItens = {
    id: number,
    name: string,
    description: string,
    alcoholic: number,
    price: number,
    position: number,
    visible: number,
    availabilityType: AvailabilityType,
    sku: string,
    images:[
        image
    ],
    available: boolean
}

type burgers = {
     id: number,
     name: string,
     description: string | null,
     position: number,
     visible: number,
     images:[
        image
    ],
     items: [
        burgerItens,
       {
           id: number,
           name: string,
           description: string,
           alcoholic : number,
           price: number,
           position: number,
           visible: number,
           availabilityType: AvailabilityType,
           sku: string,
           modifiers: [
            {
                id: number,
                name: string,
                minChoices: number,
                maxChoices: number,
                items: [
                   {
                      id: string,
                      name: string,
                      price: string,
                      maxChoices: number,
                      position: number,
                      visible: number,
                      availabilityType: AvailabilityType,
                      available: boolean
                   }
                ]
             }
          ],
           images: [
            image
           ],
           available: boolean
       },
    ]
 }

 export type { burgers }

