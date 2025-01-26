enum AvailabilityType {
    AVAILABLE_NOW = "AVAILABLE_NOW"
}

type image = {
    id : number,
    image: string
}

type itemModifiresProps = {
    id: string;
    name: string;
    price: number;
    maxChoices?: number;
    position: number;
    visible: number;
    availabilityType: AvailabilityType;
    isCheckedRadioInput: boolean;
    available: boolean;
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
    images :[
        image
    ]
}

type itemImageProps = {
    removeItemSelected: ()=> void;
    setItemSelected?: (item: item | null)=> void;
    item : item
}

type itemProps = {
    removeItemSelected: ()=> void;
    setItemSelected?: (item: itemModifiresProps | null)=> void;
        item?: {
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
            modifiers?: [
                {
                    id: number,
                    name: string,
                    minChoices: number,
                    maxChoices: number,
                    items: [
                       {
                          id: string,
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
              ],
            available: boolean
        }   
}

export type { itemProps, itemModifiresProps, itemImageProps }

export { AvailabilityType }