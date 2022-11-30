import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from './Banner.styles';

export type BannerProps = {
    onScrollClick: () => void;
};

export const Banner = (props: BannerProps) => {
    const { onScrollClick } = props;
    return (
        <section className="banner" style={{ height: window.innerHeight }}>
            {window.innerWidth <= 600 && (
                <div className="overlayBlackWrapper">
                    {/* <img className="overlayBlack" src={opacityBlack} alt="" /> */}
                    <div className="bgBlack"></div>
                </div>
            )}
            <div className="overlay">
                <div className="banner__title">For success for project</div>
                <div className="banner__title">Best choice</div>
                <div className="banner__description">
                    I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard
                    to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my
                    best. ― Marilyn Monroe
                </div>
                <Link to={'/contact'}>
                    <StyledButton type="primary">Register</StyledButton>
                </Link>

                <div className="banner__mouse" onClick={onScrollClick}>
                    {/* <img src={mouse} alt="" />
                    <img src={arrow_dow} alt="" /> */}
                </div>
            </div>
        </section>
    );
};

export default Banner;
