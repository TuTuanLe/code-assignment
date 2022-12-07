import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { StyledContent } from './Content.styles';

type ContentProps = {
    data: any;
    title: string;
};

export const Content = (props: ContentProps) => {
    const { data, title } = props;
    if (!data) {
        return <div />;
    }
    return (
        <StyledContent>
            <div className="title">{title}</div>
            <div className="wrapper">
                <Carousel showArrows={true} showThumbs={false}>
                    {data.map((itemData: any, index: number) => (
                        <div key={index}>
                            {itemData.map((item: any, index_item: number) => (
                                <div key={index_item} className="rowWrapper">
                                    <div>
                                        <div className="rowHeader">{item.header}</div>
                                        <div className="rowSubHeader">{item.subHeader}</div>
                                    </div>
                                    <div className="numberContent">{item.numberText}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </Carousel>
            </div>
        </StyledContent>
    );
};

export default Content;
