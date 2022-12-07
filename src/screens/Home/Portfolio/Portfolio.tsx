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
        description: '프리미엄 구독형 전동킥보드 서비스.',
    },
    {
        id: 2,
        logo: icon2,
        backgroundColor: '#FFD400',
        backgroundImage: require('../../../assets/images/project2.png'),
        description: '프리미엄 개인 퀵 택배 서비스.',
    },
    {
        id: 3,
        logo: icon3,
        backgroundColor: '#5BD8FD',
        backgroundImage: require('../../../assets/images/project3.png'),
        description: '온라인 진료 및 생활 건강 안내 서비스.',
    },
    {
        id: 4,
        logo: icon4,
        backgroundColor: '#EBEBEB',
        backgroundImage: require('../../../assets/images/project4.png'),
        description: '블록체인 기반 슈즈 오너 관리 서비스.',
    },
];

const projects2 = [
    {
        id: 1,
        logo: icon5,
        backgroundColor: '#0059E1',
        backgroundImage: require('../../../assets/images/project5.png'),
        description: '찾아가는 도심형 렌트카 서비스.',
    },
    {
        id: 2,
        logo: icon6,
        backgroundColor: '#3C4489',
        backgroundImage: require('../../../assets/images/project6.png'),
        description: '결혼 준비 체크리스트 서비스.',
    },
    {
        id: 3,
        logo: icon7,
        backgroundColor: '#00BCA0',
        backgroundImage: require('../../../assets/images/project7.png'),
        description: '목표 관리 소셜 네트워크 앱 서비스.',
    },
    {
        id: 4,
        logo: icon8,
        backgroundColor: '#9A6DD8',
        backgroundImage: require('../../../assets/images/project8.png'),
        description: '우리동네 의료 커뮤니티 서비스.',
    },
];

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <div className="title">
                <span className="header">포트폴리오.</span>
                <span> 메타업이 함께한 프로젝트입니다.</span>
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
