import styled from 'styled-components';
import { Layout } from 'antd';

export const StyledFooter = styled.section`
    display: flex;
    max-width: 100%;
    margin: 0 120px;
    gap: 100px;
    .textTitle {
        color: #ffffff;
        font-size: 40px;
        font-weight: bold;
        line-height: 60px;
        margin-bottom: 40px;
    }
    .image-bg {
        flex: 6;
    }
    .leftSide {
        width: 100%;
        flex: 4;
    }
`;
