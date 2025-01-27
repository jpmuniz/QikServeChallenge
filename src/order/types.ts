type orderType = {
    totalValue: number,
    id: number,
    name: string,
    amount: number        
}

type orderTypes = {
    orders: orderType[]
}

export type { orderTypes, orderType };