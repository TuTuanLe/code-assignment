import React from 'react';
import { Link } from 'react-router-dom';
import { StyledBanner, StyledButton } from './Banner.styles';

import opacityBack from '../../../assets/images/opacityBlack.svg';

import mouse from '../../../assets/icons/mouse.svg';

import arrow_dow from '../../../assets/icons/arrow-down.svg';

export type BannerProps = {
    onScrollClick: () => void;
};

export const Banner = (props: BannerProps) => {
    const { onScrollClick } = props;
    return (
        <StyledBanner className="banner" style={{ height: window.innerHeight }}>
            <div className="overlay-black-wrapper">
                <img className="bg-black" src={require('../../../assets/images/banner.png')} />
                <img className="overlay-black" src={opacityBack} alt="" />
            </div>
            <div className="overlay">
                <div className="title">For success for project</div>
                <div className="title">Best choice</div>
                <div className="description">
                    I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard
                    to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my
                    best. ― Marilyn Monroe
                </div>
                <Link to={'/contact'}>
                    <StyledButton type="primary">Register</StyledButton>
                </Link>

                <div className="scroll-mouse" onClick={onScrollClick}>
                    <img src={mouse} alt="" />
                    <img src={arrow_dow} alt="" />
                </div>
            </div>
        </StyledBanner>
    );
};

export default Banner;
