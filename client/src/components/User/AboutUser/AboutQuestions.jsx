import React, { useState } from "react";
import Drag from "./Drag";

function AboutQuestions() {
  const [dragAbout, setDragAbout] = useState(["Have a Quiet Night in", "Try a New Restaurant", "Go to a Concert/Show", "Watch Sports"]);

  const handleDragSubmit = (dragAbout) => {
    console.log(dragAbout)
  };

  return (
      <div>
        <h2>One</h2>
        <Drag onChange={setDragAbout} />
        <div>
          <button onClick={handleDragSubmit(dragAbout)}>Next Question</button>
        </div>
      </div>
  );

}

export default AboutQuestions;