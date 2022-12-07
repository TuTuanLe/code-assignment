import styled from 'styled-components';

import { Card } from 'antd';

export const StyledPortFolioCard = styled.div`
    border-radius: 15px;
    border: 1px #2d2d2d solid;

    min-height: 520px;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    .overlay {
        border-radius: 15px;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        transition: all 1s;
        &:hover {
            opacity: 0;
            visibility: hidden;
        }
    }
    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 120px;
        img {
            margin: auto;
        }
    }
    .content {
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            .image {
                transition: 0.5s;
                transform: scale(1.4);
            }
        }
        .image {
            width: 100px;
            transition: 0.2s;
        }
        .description {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex: 1;
            p {
                color: #8d7e7e;
                margin: 5px 0;
                font-size: 14px;
                font-weight: bold;
            }
            p:last-child {
                color: #fff;
            }
            .text-light {
            }
        }
        .description-black {
            .text-light {
            }
        }
    }
`;

export const Image = styled.img`
    width: 50px;
    height: 100px;
`;
