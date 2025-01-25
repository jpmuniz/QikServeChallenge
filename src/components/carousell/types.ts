type cardType = {
    name: string,
    image: string,
    isSelected: boolean
}

type CarrousellProps = {
    sectionsMenu : {
            name: string,
            image: string,
            isSelected: boolean
    }[] | undefined
}

export type { CarrousellProps, cardType };