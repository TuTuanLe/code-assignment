import styled from 'styled-components';
import { Button } from 'antd';
export const StyledBanner = styled.div`
    .overlay-black-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        .overlay-black {
            position: absolute;
            width: 100%;
        }
        .bg-black {
            width: 100%;
            height: 100%;
            background-color: #000;
            opacity: 0.9;
        }
    }

    .overlay {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 120px;
        position: absolute;
        top: 0;
        left: 0;
        .title {
            white-space: pre-line;
            color: #fff;
            max-width: 418px;
            font-size: 34px;
            line-height: 60px;
            font-weight: bold;
        }
        .description {
            margin: 30px 0 50px 0;
            color: #d3d3d3;
            max-width: 418px;
            font-size: 14px;
            line-height: 28px;
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
    }
`;

export const StyledButton = styled(Button)``;
