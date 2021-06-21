import React, { useState } from "react";

const Accordion = ({ items }) => {

  const [activeIndex, setActiveIndex] = useState(null);


  const onClickResult = (index) => {
    setActiveIndex(index);
  };

  const mappedResults = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div 
            className="title active" 
            onClick={() => onClickResult(index)}
        >
          <i className="icon dropdown"></i>
          <h4>{item.title}</h4>
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">
    {mappedResults}
    <h1>{activeIndex}</h1>
    </div>;
};
export default Accordion;
