import { useState } from 'react';
import { useDispatch } from "react-redux";
import { AppDispatch } from '../../redux/store';
import { removeOrder } from "../../order/orderSlice";
import { formatPrice } from '../utils';
import { itemsProps } from './types';
import { Container, 
         Description, 
         Image, 
         Title, 
         ChooseYourSize, 
         ListOptionsSizeDescription,
         RadioInput,
         CloseItem,
         ImageWrapper,
         ContainerOptionSize,
         CloseItemDefault
} from './style';

const Items = ({ item, hasImage ,removeItemSelected, setItemSelected }: itemsProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const [itemsSelected, setItemsSelected] = useState<boolean>(false);

    const removeItemFromOrder = () => {
        dispatch(removeOrder(item.id));
        setItemSelected?.(null)
    }

    const handleClickSelectItem =()=> {
        setItemsSelected(()=> !itemsSelected)
        if(itemsSelected){
            removeItemFromOrder();
            return
        }
        setItemSelected?.(item);
    }

    return(
        <Container>
            {hasImage ? 
                <>
                    <ImageWrapper>
                        <Image src={item?.images?.[0]?.image}/>
                        <CloseItem onClick={removeItemSelected}/>                
                    </ImageWrapper>  
                    <Description>
                        <Title>{item?.name}</Title>
                    </Description>
                </>
                :
                <ContainerOptionSize>
                    <Title>{item?.name}</Title>
                    <CloseItemDefault onClick={removeItemSelected}/>   
                </ContainerOptionSize>       
            }
 
            <ChooseYourSize>
                <h3>{item?.name}</h3>
                <p>Select 1 option</p>
            </ChooseYourSize>   
            <ContainerOptionSize>
                <ListOptionsSizeDescription>
                    <h3>{item?.name}</h3>
                    <h4>{formatPrice(item?.price ?? 0)}</h4>
                </ListOptionsSizeDescription>
                    <RadioInput 
                        type='radio' 
                        onClick={handleClickSelectItem}
                        checked={itemsSelected} 
                    />
            </ContainerOptionSize>
        </Container>
    )

};

export { Items }