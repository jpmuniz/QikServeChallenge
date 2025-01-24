import { Container, Input, SearchIcon } from './style';

const InputSearch = () => {
    const handleChange = (value: string) => {}
    return (
        <Container>
            <SearchIcon />
            <Input type="search" placeholder='Search menu items' onChange={(e)=> handleChange(e.target.value)}/>
        </Container>
        
    )
}
export { InputSearch }


