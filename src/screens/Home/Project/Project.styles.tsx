import styled from 'styled-components';

export const StyledProject = styled.section`
    min-height: 1080px;
    height: 100%;
    position: relative;
    background: #000 center;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 1920px;
    margin: 0 auto;
    flex: 1;
    .overlay {
        background: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100%;
        padding-top: 160px;
        position: absolute;
        top: 0;
        left: 0;
        .title {
            white-space: pre-line;
            color: #7e7e7e;
            font-size: 25px;
            line-height: 60px;
            font-weight: bold;
            display: flex;
            justify-content: center;
            font-family: Elice Digital Baeum, serif;
            margin-bottom: 140px;
            .project-name {
                color: #ffffff !important;
            }
        }
        .content-wrap-list {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(545px, 1fr));
            max-width: 1440px;
            margin: 0 auto;
            padding: 40px;
            justify-content: center;
            align-items: center;
            padding-bottom: 60px;
            gap: 30px;
        }
    }
    .scroll-mouse {
        display: flex;
        flex-direction: column;
        width: max-content;
        position: absolute;
        bottom: 0;
        color: #bcbcbc;
        left: 0;
        right: 0;
        margin: auto auto 20px;
        cursor: pointer;
        transition: 0.3s;
        &:active {
            transform: scale(0.5);
        }
    }
`;
