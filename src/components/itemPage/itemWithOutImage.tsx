import { useState } from 'react';
import { formatPrice } from '../utils';
import { itemImageProps } from './types';
import { Container, 
         Title, 
         ChooseYourSize,
         ListOptionsSizeDescription,
         RadioInput,
         ContainerOptionSize,
         CloseItemDefault
} from './style';

const ItemWithOutImage = ({ item, removeItemSelected, setItemSelected }: itemImageProps) => {

    const [itemSelectedHasImage, setItemSelectedHasImage] = useState<boolean>(false);
    const handleClick =()=> {
        setItemSelectedHasImage(()=> !itemSelectedHasImage)
        if(itemSelectedHasImage){
            setItemSelected?.(null)
            return
        }
        setItemSelected?.(item);
    }

    return(
        <Container>
            <ContainerOptionSize>
                <Title>{item?.name}</Title>
                <CloseItemDefault onClick={removeItemSelected}/>   
            </ContainerOptionSize> 
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
                onClick={handleClick}
                checked={itemSelectedHasImage} 
            />
            </ContainerOptionSize>
        </Container>
    )

}

export { ItemWithOutImage }