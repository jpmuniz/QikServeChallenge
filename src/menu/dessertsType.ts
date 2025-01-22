import { AvailabilityType} from './types';

type image = {
    id : number,
    image: string
}

type desserts = {
     id: number,
     name: string,
     position: number,
     images: [
        image
    ],
     items:[
       {
           id: number,
           name: string,
           alcoholic: number,
           price: number,
           position: number,
           visible: 1,
           availabilityType : AvailabilityType,
           images:[
               image
          ],
           available: boolean
       }
    ]
}

export type { desserts }