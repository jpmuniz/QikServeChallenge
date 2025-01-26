import { buttonProps } from './types';
import { ButtonSubmit } from './style';

const Button =({ text,  onClick }: buttonProps)=> (
    <ButtonSubmit onClick={onClick}>{text}</ButtonSubmit>
)

export { Button }