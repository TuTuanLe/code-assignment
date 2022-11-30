import { PortfolioCard } from '../../components/portFolioCard';
import { StyledHome } from './Home.styles';
import { HomeProps } from './withHome';

export const HomeDesktop = (props: HomeProps) => {
    const {
        data: { template },
    } = props;
    return (
        <StyledHome>
            {template?.map((item, index) => (
                <PortfolioCard
                    key={index}
                    id={item.id}
                    backgroundColor={item.backgroundColor}
                    url={item.url}
                    description={item.description}
                />
            ))}
        </StyledHome>
    );
};
