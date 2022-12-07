import { Image, StyledPortFolioCard } from './PortFolioCard.styles';

export type PortFolioCardProps = {
    id: number;
    backgroundColor: string;
    description: string;
    logo?: string;
    backgroundImage?: string;
};

export const PortfolioCard = (props: PortFolioCardProps) => {
    const { backgroundColor, id, description, backgroundImage, logo } = props;
    return (
        <StyledPortFolioCard>
            <div className="overlay" />
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="content" style={{ backgroundColor }}>
                <div className={backgroundColor !== '#EBEBEB' ? 'description' : 'description-black'}>
                    <p className="text-light">한 마디로,</p>
                    <p>{description}</p>
                </div>
                <img className="image" src={backgroundImage} alt="" />
            </div>
        </StyledPortFolioCard>
    );
};
