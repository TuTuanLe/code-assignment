import styled from 'styled-components';

export const StyledContent = styled.div`
    .wrapper {
        border-radius: 15px;
        height: 417px;
        border: 1px solid gray;
        color: white;
        .carousel.carousel-slider {
            height: 100%;
        }
        .carousel-status {
            visibility: collapse;
        }
        .carousel .control-dots .dot.selected,
        .carousel .control-dots .dot:hover {
            background: #04da9a;
        }
        .rowWrapper {
            margin: 50px;
            display: flex;
            justify-content: space-between;
            font-family: Spoqa Han Sans Neo, serif;
            .rowHeader {
                font-weight: bold;
                font-size: 18px;
            }
            .rowSubHeader {
                font-size: 14px;
                font-weight: bold;
                color: #7e7e7e;
            }
        }
        .numberContent {
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #7e7e7e;
            font-size: 18px;
            font-weight: bold;
        }
    }
`;
