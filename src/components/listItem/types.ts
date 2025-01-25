enum AvailabilityType {
    AVAILABLE_NOW = "AVAILABLE_NOW"
}


type image = {
    id : number,
    image: string
}


type listItemProps = {
    listProps : {
        name: string,
        items : {
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
        }[] | undefined
    }
}

export type { listItemProps }

export { AvailabilityType }