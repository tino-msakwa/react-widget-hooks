import React from "react";

const Accordion = ({ items }) => {
  const mappedResults = items.map(item => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active">
          <i className="icon dropdown"></i>
          <h4>{item.title}</h4>
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
};
export default Accordion;
