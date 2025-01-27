import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { applyEllipsis, formatPrice } from '../utils';
import { listItemProps,  AvailabilityType} from './types';
import { Container, Content, Item, Description, Image, Header, HeaderContainer } from './style';

const ListItem = ({ listProps, handleClickSelectItem }: listItemProps) => {
    const [isItemVisible, setItemVisible] = useState<boolean>(true);

    const handleClickArrowIcon = () => setItemVisible(!isItemVisible);   
    
    const showArrowIcon = () => (
        isItemVisible ? 
            <IoIosArrowUp onClick={handleClickArrowIcon}/>
            :
            <IoIosArrowDown onClick={handleClickArrowIcon} />
    );

    const showListItem = () => (
        listProps.items?.map(item => (
            item.availabilityType === AvailabilityType.AVAILABLE_NOW ?
                <Item key={item.name} $isVisible={isItemVisible} onClick={()=> handleClickSelectItem(item)}>
                    <Description>
                        <h3><b>{item.name}</b></h3>
                        <p>{applyEllipsis(item?.description, 60)}</p>
                        <h6><b>{formatPrice(item.price)}</b></h6>
                    </Description>
                    {item?.images?.[0].image && 
                        <Image src={item?.images?.[0].image}/>
                    }
                    
                </Item>
            : 
                <Item key={item.name} $isVisible={isItemVisible}>
                    <Description>
                        <h3>{item.name}</h3>
                        <p>Item indisponível</p>
                    </Description>
                    {item?.images?.[0].image && 
                        <Image src={item?.images?.[0].image}/>
                    }
                </Item>

        ))
    );

    return (
        <Container>
            <HeaderContainer>
                <Header>{listProps.name}</Header>
                {showArrowIcon()}
            </HeaderContainer>
            <Content>
                {showListItem()}
            </Content>
        </Container>
    )
}

export { ListItem }