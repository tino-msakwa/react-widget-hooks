import React, { useState, useEffect } from "react";
import axios from 'axios';


const Search = () => {
    
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

    useEffect(() => {
      const search = async () => {
          const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
              params: {
                  action: 'query',
                  list: 'search',
                  origin: '*',
                  format: 'json',
                  srsearch: term
              },
          });

          
          
      };
      if (term) {
          search()
        }
  }, [term]);

  const renderedItems = results.map(result => {
    return (
    <div className="item">
        <div className="content">
            <div className="header">
              {result.title}
            </div>
        </div>
        <div className="ui celled list">
        <hr />
        {result.snippet}
        <br />
        </div>
    </div>
    );
});

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
        {renderedItems}
      </div>
    </div>
  )
}


export default Search;
