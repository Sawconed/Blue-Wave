export type SpeciesProps = {
    name: string;
    englishName: string;
    image: string;
    info: string;
}

export type CustomCardProps = {
    species: SpeciesProps;
    className?: string;
    size?: string;
    href?: string;
};

export type CustomButtonProps = {
    className?: string;
    href: string;
    title: string;
    size?: string;
};