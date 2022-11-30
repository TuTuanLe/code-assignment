import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import './styles.css';

function Content(props) {
  const { data, title } = props;
  if (!data) {
    return <div />;
  }
  return (
    <div className="ContentProject">
      <div className="headerContent">{title}</div>
      <div className="contentWrapper">
        <Carousel showArrows={true} showThumbs={false}>
          {data.map((itemData, index) => (
            <div key={index}>
              {itemData.map((item, index_item) => (
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
    </div>
  );
}

export default Content;
