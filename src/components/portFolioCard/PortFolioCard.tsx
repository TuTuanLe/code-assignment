import { Image, StyledPortFolioCard } from './PortFolioCard.styles';

export type PortFolioCardProps = {
    id: number;
    url: string;
    backgroundColor: string;
    description: string;
};

export const PortfolioCard = (props: PortFolioCardProps) => {
    const { backgroundColor, id, description, url } = props;
    return (
        <StyledPortFolioCard bordered={true} style={{ width: 300 }}>
            <Image src={url} />
            <p style={{ backgroundColor: backgroundColor }}>{description}</p>
        </StyledPortFolioCard>
    );
};
