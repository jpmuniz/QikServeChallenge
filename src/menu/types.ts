enum AvailabilityType {
    availabilityNow = "AVAILABLE_NOW"
}

type image = {
    id : number,
    image: string
}

type sectionsMenuType = {
        id: number,
         name: string,
         description: string | null,
         position: number,
         visible: number,
         images:[
            image
        ],
         items: [
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

type menu = {
    id: number,
    name: string,
    type: string,
    collapse: number,
    sections:[sectionsMenuType]
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