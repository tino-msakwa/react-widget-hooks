import React, { useState, useEffect } from "react";
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);

  console.log("I run at the initial render!");

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

          setTerm(data.query.search);
      }

      search();
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
