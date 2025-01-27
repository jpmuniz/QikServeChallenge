import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { AppDispatch } from '../../redux/store';
import { removeOrder } from "../../order/orderSlice";
import { formatPrice, fomartArrayItemsModifiers } from '../utils';
import { itemProps, itemSelectedProps } from './types';
import { Description, 
         Image, 
         ItemDescription, 
         Title, 
         ChooseYourSize, 
         ListOptionsSize , 
         ListOptionsSizeDescription,
         RadioInput,
         CloseItem,
         ImageWrapper
} from './style';

const ModifiersItems = ({ item, removeItemSelected, setItemSelected }: itemProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const [itemsModifires, setItemsModifires] = useState<itemSelectedProps[]>()

    const removeItemFromOrder = (item: itemSelectedProps) => {
        item.isCheckedRadioInput = false;
        dispatch(removeOrder(item.id));
        setItemSelected?.(null);
        return item;
    }

    const inputRadioWasChecked = (item: itemSelectedProps) =>{
        item.isCheckedRadioInput = true;
        setItemSelected?.(item);
    }

    const handleClickSelectItem = (item: itemSelectedProps) => {
          const response = itemsModifires?.map(data => {
            if(data.id === item.id && data.isCheckedRadioInput){
                return removeItemFromOrder(data);
            }
            data.isCheckedRadioInput = false;
            if(data.id === item.id){
                inputRadioWasChecked(data)
            }
            return data;
          })
         setItemsModifires(response);
    };
    useEffect(()=>{
        const modifiers = item?.modifiers?.[0]?.items;
        const response = fomartArrayItemsModifiers(modifiers ?? [])
        setItemsModifires(response)
    }, [])

    return (
        <>
            <ImageWrapper>
                <Image src={item?.images?.[0]?.image}/>
                <CloseItem onClick={removeItemSelected}/>                
            </ImageWrapper>
            <Description>
                <Title>{item?.name}</Title>
                <ItemDescription>{item?.description}</ItemDescription>
            </Description>
            <ChooseYourSize>
                <h3>{item?.name}</h3>
                <p>Select 1 option</p>
            </ChooseYourSize>            
            <ul>
                {
                    itemsModifires?.map(item => (
                        <ListOptionsSize key={item.id}>
                            <ListOptionsSizeDescription>
                                <h3>{item.name}</h3>
                                <h4>{formatPrice(item.price)}</h4>
                            </ListOptionsSizeDescription>
                            <RadioInput 
                                type='radio' 
                                checked={item.isCheckedRadioInput}
                                onClick={()=> handleClickSelectItem(item)}
                            />
                        </ListOptionsSize>
                    ))
                }
            </ul>                            
        </> 
    ) 
}

export { ModifiersItems }