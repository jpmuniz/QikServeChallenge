import { useState, useEffect } from 'react';
import { Modifiers } from './itemModifiersData';
import { ItemImage } from './itemImage';
import { ItemWithOutImage } from './itemWithOutImage'
import { Button } from '../button/index'
import { formatPrice } from '../utils';
import { itemProps, itemModifiresProps ,AvailabilityType } from './types';
import { Container, ContainerAddOrder } from './style';


const ItemPage = ({ item, removeItemSelected }: itemProps) => {
    const [itemSelected, setItemSelected] = useState<itemModifiresProps | null>()
    const [priceOrder, setAddPriceOrder] = useState<string>("");
    const HAS_MODIFIERS_DATA = !!item?.modifiers?.[0]?.items.length;
    const HAS_IMAGE = !!item?.images?.[0]?.image && !HAS_MODIFIERS_DATA;
    const NO_IMAGE_NO_MODIFIERS_DATA = !HAS_IMAGE && !HAS_MODIFIERS_DATA;
    const ADD_ORDER_LABEL = "Add to order "; 

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
    

    useEffect(()=>{
        if(itemSelected === null){
            setAddPriceOrder("");
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
                <Button     
                    text={`${ADD_ORDER_LABEL} ${priceOrder}`} 
                    onClick={handleClickAddOrder} 
                />
            </ContainerAddOrder>
        </Container>
    )
  };
  
  export { ItemPage };