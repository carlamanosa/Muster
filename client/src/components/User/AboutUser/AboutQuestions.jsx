import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Drag from "./Drag";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function AboutQuestions() {
  const [showStart, setShowStart] = useState(true);
  const [q1A, setQ1A] = useState([]);
  const [q2A, setQ2A] = useState({});
  const [q3A, setQ3A] = useState({});

  const handleDragSubmit = (dragAbout) => {
    console.log(dragAbout)
  };

  const handleStart = () => {
    setShowStart(false);
  };

  const handleQ3Submit = (checks) => {
    console.log(checks);
  }

  const Questions = () => {
    const [dragAbout, setDragAbout] = useState(["Have a Quiet Night in", "Try a New Restaurant", "Go to a Concert/Show", "Watch Sports"]);
    return (
      <div>
        <h2>One</h2>
        <Drag onChange={setDragAbout} />
        <div>
          <Link to="/two"><button onClick={handleDragSubmit(dragAbout)}>Next Question</button></Link>
        </div>
      </div>
    )
  };

  const Q2Q = () => {
    const [swt, setSwt] = React.useState(true);
    return (
      <Container>
        <h2>Two</h2>
        <Form>
          <Form.Row>
            <Form.Group controlId="formGridGeoIp">
              <Form.Check custom type="switch">
                <Form.Check.Input isInvalid checked={swt} />
                <Form.Check.Label onClick={() =>
                  setSwt(!swt)
                }>
                  {`Use Current Location: ${swt}`}
                </Form.Check.Label>
              </Form.Check>
            </Form.Group>
          </Form.Row>
        </Form>
        <Link to="/questions"><button>Previous Question</button></Link>
        <Link to="/three"><button onClick={setQ2A(swt)}>Next Question</button></Link>
      </Container>
    )
  };

  const Q3Q = () => {
    const [checks, setChecks] = React.useState({
      one: false,
      two: false,
      three: false
    });
    return (
      <div>
        <h2>Three</h2>
        <Form>
          <Form.Check
            type="checkbox"
            id="one"
            label="default checkbox"
            onClick={() => setChecks({ ...checks, one: !(checks.one) })} >
          </Form.Check>
          <Form.Check
            type="checkbox"
            id="two"
            label="default checkbox"
            onClick={() => setChecks({ ...checks, two: !(checks.two) })} >
          </Form.Check>
          <Form.Check
            type="checkbox"
            id="three"
            label="default checkbox"
            onClick={() => setChecks({ ...checks, three: !(checks.three) })} >
          </Form.Check>
        </Form>
        <Link to="/two"><button >Previous Question</button></Link>
        <Link to="/submit"><button onClick={handleQ3Submit(checks)}>Submit</button></Link>
      </div>
    )
  };

  const Submit = () => {
    return (
      <div>
        <h2>Yay!</h2>
      </div>
    )
  };


  return (
    <Router>
      <div>
        <div style={{ display: showStart ? 'inline' : 'none' }}>
          <Link to="/questions"><button onClick={handleStart}>Start</button></Link>
        </div>

        <hr />
        <Route path="/questions" component={Questions} />
        <Route path="/two" component={Q2Q} />
        <Route path="/three" component={Q3Q} />
        <Route path="/submit" component={Submit} />
      </div>
    </Router>
  );

}

export default AboutQuestions;