import React from 'react';
import mouse from '../../../assets/icons/mouse.svg';
import arrow_dow from '../../../assets/icons/arrow-down.svg';

import { StyledProject } from './Project.styles';
import { Content } from './Content';

const data = {
    first: [
        [
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
        ],
        [
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
        ],
        [
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
        ],
    ],
    second: [
        [
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
        ],
        [
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
        ],
        [
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
            {
                header: 'UIT ',
                subHeader: 'UI/UX, Front-end, Back-end.',
                numberText: 'Shopping',
            },
        ],
    ],
};

type ProjectProps = {
    onScrollClick: () => void;
};

export const Project = (props: ProjectProps) => {
    const { onScrollClick } = props;
    return (
        <StyledProject>
            <div className="overlay">
                <div>
                    <div className="title">
                        <span className="project-name">UIT .</span>
                        <span>University Information Of Technology.</span>
                    </div>
                </div>
                <div className="content-wrap-list">
                    <Content data={data.first} title="Front End." />
                    <Content data={data.second} title="Back End." />
                </div>
            </div>
            <div className="scroll-mouse" onClick={onScrollClick}>
                <img src={mouse} alt="" />
                <img src={arrow_dow} alt="" />
            </div>
        </StyledProject>
    );
};

export default Project;
