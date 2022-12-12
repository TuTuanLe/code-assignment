import React from 'react';
import mouse from '../../../assets/icons/mouse.svg';
import arrow_dow from '../../../assets/icons/arrow-down.svg';

import { StyledProject } from './Project.styles';
import { Content } from './Content';
import { useAssignment } from '../../../store';
import { useObservableState } from 'observable-hooks';

type ProjectProps = {
    onScrollClick: () => void;
};

export const Project = (props: ProjectProps) => {
    const { rawsBackendInfo$, rawsFrontendInfo$ } = useAssignment();

    const frontendInfo = useObservableState(rawsFrontendInfo$, []);
    const backendInfo = useObservableState(rawsBackendInfo$, []);

    console.log('frontendInfo', frontendInfo);
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
                    <Content data={frontendInfo} title="Front End." />
                    <Content data={backendInfo} title="Back End." />
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
