import { useState } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { applyEllipsis, formatPrice } from '../utils';
import { listItemProps,  AvailabilityType} from './types';
import { Container, Content, Item, Description, Image, Header, HeaderContainer, ContainerNameList } from './style';

const ListItem = ({ listProps, handleClickSelectItem }: listItemProps) => {
    const [isItemVisible, setItemVisible] = useState<boolean>(true);
    const orders = useSelector((state: RootState) => state.order.orders);
    const MINIMUM_VALUE = 0;

    const checkIfItemHasOrder = (id: number, name: string) => {
        const value = orders.filter(order => order.id === id && order);
        const amount = value[0]?.amount; 
        if(amount > MINIMUM_VALUE){
            return (
                <ContainerNameList>
                    <strong>{value[0]?.amount}</strong>
                    <h3><b>{name}</b></h3>
                </ContainerNameList>
            )
        }
            return (
                <h3><b>{name}</b></h3>                
            )
    }
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
                        {checkIfItemHasOrder(item.id, item.name)}
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