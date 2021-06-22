import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  console.log("I run at the initial render!");

  useEffect(() => {
      console.log("I run at every re-render!!");
  }, [term]);
  
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <lablel className="lable">Please Enter Search Term</lablel>
          <input
            type="text"
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
