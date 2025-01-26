import { useState, useEffect } from 'react';
import { formatPrice, fomartArrayItemsModifiers } from '../utils';
import { itemProps, itemModifiresProps } from './types';
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

const Modifiers = ({ item, removeItemSelected, setItemSelected }: itemProps) => {
    const [itemsModifires, setItemsModifires] = useState<itemModifiresProps[]>()

    const handleClickSelectItem = (item: itemModifiresProps) => {
          const response = itemsModifires?.map(data => {
            if(data.id === item.id && data.isCheckedRadioInput){
                data.isCheckedRadioInput = false;
                setItemSelected?.(null);
                return data;
            }
            data.isCheckedRadioInput = false;
            if(data.id === item.id){
                data.isCheckedRadioInput = true;
                setItemSelected?.(data);
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
                                onClick={()=> handleClickSelectItem(item)} 
                                checked={item.isCheckedRadioInput}
                            />
                        </ListOptionsSize>
                    ))
                }
            </ul>                            
        </> 
    ) 
}

export { Modifiers }