import { useState, useEffect } from 'react';

import { Card } from '../card/index';
import { CarrousellProps, cardType } from './types';
import { Container } from './style';

const Carousell = ({ sectionsMenu }: CarrousellProps) => {
    const [itemsOfCard, setItemsOfCard] = useState<cardType[]>([])
    
    const handleClickSelectCard = (name: string) => {
        setItemsOfCard(itemsOfCard.map(item => {
            item.isSelected = false;
            if(item.name === name){
                item.isSelected = !item.isSelected;
            }
            return item;
        }))
    }

    const buildArrayItemsOfCards = () =>{
        const cardItems = sectionsMenu?.map(section => {
            return {
                name: section.name,
                image: section.image,
                isSelected: false
            }
        });
        setItemsOfCard(cardItems ?? []);
    }

    useEffect(() => {
        buildArrayItemsOfCards()
    },[])

    return (
        <Container>
            {itemsOfCard?.map(item =>(
                <Card 
                    key={item.name} 
                    isSelected={item.isSelected}
                    handleClick={()=> handleClickSelectCard(item.name)} 
                    image={item.image} 
                    name={item.name}
                />
            ))}
        </Container>
    )

}

export { Carousell }