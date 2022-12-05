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
`;

export const StyledButton = styled(Button)``;
