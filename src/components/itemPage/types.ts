enum AvailabilityType {
    AVAILABLE_NOW = "AVAILABLE_NOW"
}

type image = {
    id : number,
    image: string
}

type itemSelectedProps = {
    id: number;
    name: string;
    price: number;
    maxChoices?: number;
    position: number;
    visible: number;
    availabilityType: AvailabilityType;
    isCheckedRadioInput?: boolean;
    available?: boolean;
    description?: string;
    alcoholic?: number;
    sku?: string;
    images?: [
        image
    ]
}

type generateConstantProps = {
    item : itemSelectedProps
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

type itemsProps = {
    hasImage?: boolean;
    removeItemSelected: ()=> void;
    setItemSelected?: (item: item | null)=> void;
    item : item
}

type itemProps = {
    removeItemSelected: ()=> void;
    setItemSelected?: (item: itemSelectedProps | null)=> void;
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
              ],
            available: boolean
        }   
}

export type { itemProps, itemSelectedProps, itemsProps, generateConstantProps }

export { AvailabilityType }