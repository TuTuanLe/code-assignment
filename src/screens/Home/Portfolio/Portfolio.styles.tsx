import styled from 'styled-components';

export const StyledPortfolio = styled.div`
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 120px 120px;
    position: relative;
    color: #fff;
    flex: 1;
    width: 100%;
    .title {
        font-size: 25px;
        line-height: 70px;
        margin-bottom: 117px;
        font-weight: bold;
    }
    .portfolio-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        width: 100%;
        gap: 20px;
        &.row-project {
            margin-top: 20px;
        }
    }
`;
