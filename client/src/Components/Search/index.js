import React, { useRef } from "react";
import { UseBuyBestContext } from "../../Utils/GlobalState";

function Search() {
    const inputRef = useRef();
    const [_, dispatch] = UseBuyBestContext();
  
    function handleSubmit(e) {
      e.preventDefault();
  
     dispatch({
        type: e.target.value,
        name: inputRef.current.value
      });
      inputRef.current.value = "";
    }
      return (
        <div>
        <h1>Make a Search!</h1>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            placeholder="Start typing what you want to search..."
          />
            <p>what? : {_}</p>
          <button className="btn btn-info mt-3 mb-5" type="submit" value="change">
            I'm a Button
          </button>
          <br />
          <button className="btn btn-info mt-3 mb-5" type="submit" value="submit">
            So am I
          </button>
        </form>
      </div>
    );
}

export default Search;