import { useEffect, useRef, useState } from 'react';
import { StyledHome } from './Home.styles';
import { HomeProps } from './withHome';
import { scroller } from 'react-scroll';
import Banner from './Banner/Banner';
import Project from './Project/Project';
import { Portfolio } from './Portfolio';
import { useAssignment } from '../../store';

export const HomeDesktop = (props: HomeProps) => {
    const {
        data: { template },
    } = props;

    const portfolioRef = useRef<HTMLDivElement>();
    const [mobile, setMobile] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const resWidth = () => {
        if (window.innerWidth <= 800) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    };

    const handleScroll = () => {};

    useEffect(() => {
        resWidth();
        return () => window.removeEventListener('resize', resWidth);
    }, []);
    window.addEventListener('resize', resWidth);

    const handleOnScrollProjectClick = () => {
        scroller.scrollTo('Project', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    const handleOnScrollPortfolioClick = () => {
        scroller.scrollTo('Portfolio', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };
    return (
        <StyledHome>
            <div className="bannerHome">
                <div className="overlayBanner">
                    <Banner onScrollClick={handleOnScrollProjectClick} />
                </div>
            </div>

            <div className="nextPageWrapper">
                <div className="flexCenter">
                    <Project onScrollClick={handleOnScrollPortfolioClick} />
                </div>
                <Portfolio />
            </div>
        </StyledHome>
    );
};
