import {  } from '../listItem/'

enum AvailabilityType {
    AVAILABLE_NOW = "AVAILABLE_NOW"
}

type image = {
    id : number,
    image: string
}

type item = {
        id: number,
        name: string,
        description: string,
        alcoholic: number,
        price: number,
        position: number,
        visible: number,
        availabilityType: AvailabilityType,
        sku: string,
        images? :[
            image
        ],
        available: boolean
} | null;


type listProps = {
    handleClickSelectItem: (item: item)=> void;
    name: string,
    items : {
        name: string,
        items : {
            id: number;
            name: string;
            description: string;
            alcoholic: number;
            price: number;
            position: number;
            visible: number;
            availabilityType: AvailabilityType; 
            sku: string;
            images?: image[];
            available: boolean;
            modifiers?: [
                {
                    id: number,
                    name: string,
                    minChoices: number,
                    maxChoices: number,
                    items: [
                       {
                          id: number,
                          name: string,
                          price: number,
                          maxChoices: number,
                          position: number,
                          visible: number,
                          isCheckedRadioInput: boolean,
                          availabilityType: AvailabilityType,
                          available: boolean
                       }
                    ]
                }
            ]
        }[]
    }[] | undefined
}

export type { listProps, item }

export { AvailabilityType }