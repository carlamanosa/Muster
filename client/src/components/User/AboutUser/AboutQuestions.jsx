import React, { useState, useContext } from "react";
import Drag from "./Drag";
import User from "../../../utils/Account/User";

const { USER_ERROR, ABOUT_USER, USER_LOADING } = User.actions;

function AboutQuestions() {
  const [dragAbout, setDragAbout] = useState(["Have a Quiet Night in", "Try a New Restaurant", "Go to a Concert/Show", "Watch Sports"]);
  const [/*Not Needed*/, userDispatch] = User.useContext();

  const handleDragSubmit = (dragAbout) => {
    console.log(dragAbout)
    userDispatch({type: ABOUT_USER, dragAbout});

  };

  return (
      <div>
        <h2>One</h2>
        <Drag onChange={setDragAbout} />
        <div>
          <button onClick={() => handleDragSubmit(dragAbout)}>Next Question</button>
        </div>
      </div>
  );

}

export default AboutQuestions;