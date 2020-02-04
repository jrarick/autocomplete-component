import React, { useState, useEffect } from 'react';

const Autocomplete = (props) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [keyNav, setKeyNav] = useState(-1);
  const [targetResult, setTargetResult] = useState({});

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleKeyDown = (e) => {
    // if down key is pressed target the next result in the list
    if (e.keyCode === 40 && keyNav < results.length - 1) {
      setTargetResult(results[keyNav + 1]);
      setKeyNav(keyNav + 1);
    }
    // if up key is pressed target the previous result in the list
    if (e.keyCode === 38 && keyNav > -1) {
      setTargetResult(results[keyNav - 1]);
      setKeyNav(keyNav - 1);
    }
    // if enter is pressed update the query with the targeted result
    if (e.keyCode === 13 && keyNav > -1) {
      setQuery(targetResult.name);
    }
  }

  const executeQuery = async () => {
    let response = await fetch(`https://coding-challenge.echoandapex.com/locations?q=${query}`);
    let resJson = await response.json();
    resJson.predictions.forEach(prediction => {
      setResults([...resJson.predictions, prediction]);
    });
  }

  // reset state and perform search whenever the query changes
  useEffect(() => {
    setResults([]);
    setKeyNav(-1);
    executeQuery();
  }, [query]);

  return (
    <div style={props.style.container}>
      <input
        style={props.style.input}
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <ul style={props.style.predictionList}>
        {results.map( (result, index) => (
          <li
            key={index}
            style={keyNav === index ? {...props.style.prediction, ...props.style.focused} : props.style.prediction}
            onMouseEnter={() => { setKeyNav(index); setTargetResult(result); }}
            onMouseLeave={() => { setKeyNav(-1); setTargetResult({}); }}
            onClick={() => setQuery(targetResult.name)}
          >
            <p style={props.style.predictionName}>{result.name}</p>
            <p style={props.style.predictionDescription}>{result.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Autocomplete;
