import react from 'react';
import { StyledPortfolio } from './Portfolio.styles';
import icon1 from '../../../assets/icons/portfolio1.svg';
import icon2 from '../../../assets/icons/portfolio2.svg';
import icon3 from '../../../assets/icons/portfolio3.svg';
import icon4 from '../../../assets/icons/portfolio4.svg';
import icon5 from '../../../assets/icons/portfolio5.svg';
import icon6 from '../../../assets/icons/portfolio6.svg';
import icon7 from '../../../assets/icons/portfolio7.svg';
import icon8 from '../../../assets/icons/portfolio8.svg';

import { PortfolioCard } from '../../../components/portFolioCard';

const projects = [
    {
        id: 1,
        logo: icon1,
        backgroundColor: '#13C4AF',
        backgroundImage: require('../../../assets/images/project1.png'),
        description: 'React Native',
    },
    {
        id: 2,
        logo: icon2,
        backgroundColor: '#FFD400',
        backgroundImage: require('../../../assets/images/project2.png'),
        description: 'React Native',
    },
    {
        id: 3,
        logo: icon3,
        backgroundColor: '#5BD8FD',
        backgroundImage: require('../../../assets/images/project3.png'),
        description: 'React Native.',
    },
    {
        id: 4,
        logo: icon4,
        backgroundColor: '#EBEBEB',
        backgroundImage: require('../../../assets/images/project4.png'),
        description: 'React Native',
    },
];

const projects2 = [
    {
        id: 1,
        logo: icon5,
        backgroundColor: '#0059E1',
        backgroundImage: require('../../../assets/images/project5.png'),
        description: 'React Native',
    },
    {
        id: 2,
        logo: icon6,
        backgroundColor: '#3C4489',
        backgroundImage: require('../../../assets/images/project6.png'),
        description: 'React Native',
    },
    {
        id: 3,
        logo: icon7,
        backgroundColor: '#00BCA0',
        backgroundImage: require('../../../assets/images/project7.png'),
        description: 'React Native',
    },
    {
        id: 4,
        logo: icon8,
        backgroundColor: '#9A6DD8',
        backgroundImage: require('../../../assets/images/project8.png'),
        description: 'React Native',
    },
];

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <div className="title">
                <span className="header">Project.</span>
                <span> UIT.</span>
            </div>
            <div className="portfolio-row">
                {projects?.map((item, index) => (
                    <PortfolioCard
                        key={index}
                        logo={item.logo}
                        backgroundColor={item.backgroundColor}
                        backgroundImage={item.backgroundImage}
                        description={item.description}
                        id={item.id}
                    />
                ))}
            </div>

            <div className="portfolio-row row-project">
                {projects2?.map((item, index) => (
                    <PortfolioCard
                        id={item.id}
                        key={index}
                        logo={item.logo}
                        backgroundColor={item.backgroundColor}
                        backgroundImage={item.backgroundImage}
                        description={item.description}
                    />
                ))}
            </div>
        </StyledPortfolio>
    );
};
