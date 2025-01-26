import { useState, useEffect } from 'react';
import { Modifiers } from './itemModifiersData';
import { ItemImage } from './itemImage';
import { ItemWithOutImage } from './itemWithOutImage';
import { CountButton } from '../countButton/index';
import { Button } from '../button/index';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { formatPrice } from '../utils';
import { itemProps, itemModifiresProps ,AvailabilityType } from './types';
import { Container, ContainerAddOrder, ContainerCountButton, Counter } from './style';


const ItemPage = ({ item, removeItemSelected }: itemProps) => {
    const [itemSelected, setItemSelected] = useState<itemModifiresProps | null>()
    const [priceOrder, setAddPriceOrder] = useState<string>("");
    const [count, setCount] = useState<number>(0)
    const HAS_MODIFIERS_DATA = !!item?.modifiers?.[0]?.items.length;
    const HAS_IMAGE = !!item?.images?.[0]?.image && !HAS_MODIFIERS_DATA;
    const NO_IMAGE_NO_MODIFIERS_DATA = !HAS_IMAGE && !HAS_MODIFIERS_DATA;
    const ADD_ORDER_LABEL = "Add to order "; 
    const MINIMUM_NUMBER = 0;
    const IS_ITEM_SELECTED = !!itemSelected;

    const newItem = {
        id: item?.id ?? 0,
        alcoholic: item?.alcoholic ?? 0,
        availabilityType: item?.availabilityType ?? AvailabilityType.AVAILABLE_NOW, 
        available: item?.available ?? false,
        description: item?.description ?? "",
        images: item?.images ?? [{
                                    id: 0,
                                    image: ""
                                }],
        name: item?.name ?? "",
        position: item?.position ?? 0,
        price: item?.price ?? 0,
        sku: item?.sku ?? "",
        visible: item?.visible ?? 0
    }

    const handleClickAddOrder = () => 
        setAddPriceOrder(()=> formatPrice(itemSelected?.price ?? 0));

    const removeCounter =()=> {
        if(count > MINIMUM_NUMBER){
            setCount(count => count - 1);
        }
    }

    const addCounter =()=> {
        if(IS_ITEM_SELECTED && itemSelected?.available){
            setCount(count => count + 1);
        }
    }
    
    useEffect(()=>{
        if(itemSelected === null){
            setAddPriceOrder("");
            setCount(0)
        }
    },[itemSelected])

    return (
        <Container>
            {HAS_MODIFIERS_DATA &&
                <Modifiers item={item} removeItemSelected={removeItemSelected} setItemSelected={setItemSelected}/>
            }
            {HAS_IMAGE &&
                <ItemImage item={newItem} removeItemSelected={removeItemSelected} setItemSelected={setItemSelected}/>
            }
            {NO_IMAGE_NO_MODIFIERS_DATA &&
                <ItemWithOutImage item={newItem} removeItemSelected={removeItemSelected} setItemSelected={setItemSelected}/>
            }             
            
            <ContainerAddOrder>
                <ContainerCountButton>
                    <CountButton 
                        backgroundColor='#DADADA'
                        color='#5f5f5f'
                        onClick={removeCounter}
                        Icon={FaMinus}
                    />
                    <Counter>{count}</Counter>
                    <CountButton 
                        backgroundColor='#4f372F'
                        color='#ffffff'
                        onClick={addCounter}
                        Icon={FaPlus}
                    />
                </ContainerCountButton>
                <Button     
                    text={`${ADD_ORDER_LABEL} ${priceOrder}`} 
                    onClick={handleClickAddOrder} 
                />
            </ContainerAddOrder>
        </Container>
    )
  };
  
  export { ItemPage };