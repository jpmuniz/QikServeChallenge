type cardProps = {
    image: string;
    name: string;
    isSelected: boolean;
    handleClick: ()=> void;
}

type contentProps = {
    isSelected?: boolean
};

export type { cardProps, contentProps };