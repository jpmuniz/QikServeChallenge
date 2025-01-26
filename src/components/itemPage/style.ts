import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll; 
`;

const CloseItem = styled(IoIosClose)`

&& {
    background-color: #F8F9FA;
    color: #000000;
    width: 28px;
    height: 28px;
    border-radius: 20px;
    position: absolute; 
    top: 48px;
    right: 16px;
    transform: translate(-50%, -50%); 
    font-size: 2.5rem;
    z-index: 9999;
    cursor: pointer;
}
`

const CloseItemDefault = styled(IoIosClose)`

&& {
    background-color: #F8F9FA;
    color: #000000;
    width: 28px;
    height: 28px;
    border-radius: 20px;
    font-size: 2.5rem;
    z-index: 9999;
    cursor: pointer;
}
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden; 
`;


const Image = styled.img`
    width:100%;
    height: 265px;
    object-fit: cover;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap:  8px;
`;

const Title = styled.h3`
    font-size: 24px;
    font-weight: 700;
    color: #121212;
    gap:  8px;
`;

const ItemDescription = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #464646;
    gap:  8px;
`;

const ChooseYourSize = styled.div`
    height: 68px;
    padding: 16px 24px;
    background-color: #F8F9FA;

    h3 {
        font-size: 16px;
        font-weight: 700;
        color: #464646;
    }
    
    p {
        font-size: 16px;
        font-weight: 700;
        color: #5f5f5f;
    }

`;

const ListOptionsSize = styled.li`
    display: flex;
    justify-content: space-between;
    height: 72px;
    padding: 16px 24px;
    align-items: center;
`;

const ContainerOptionSize = styled.div`
    display: flex;
    justify-content: space-between;
    height: 72px;
    padding: 16px 24px;
    align-items: center;
`;

const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const ListOptionsSizeDescription = styled.div`
    display: flex;
    flex-direction: column;
    height: 40px;

    h3 {
        font-size: 16px;
        font-weight: 500;
        color: #121212;
    }

    h4 {
        font-size: 16px;
        font-weight: 400;
        color: #464646;
    }
`;

const ContainerAddOrder = styled.div`
  width: 100%;
  text-align: center;
  padding: 24px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #F8F9FA;
`;



export { 
    Container, 
    Image, 
    Description, 
    Title, 
    ItemDescription, 
    ChooseYourSize, 
    ListOptionsSize, 
    ListOptionsSizeDescription, 
    RadioInput, 
    ContainerAddOrder,
    CloseItem,
    ImageWrapper,
    ContainerOptionSize,
    CloseItemDefault
}