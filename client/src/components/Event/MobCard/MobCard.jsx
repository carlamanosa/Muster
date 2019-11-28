/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from "react";
import Card from 'react-bootstrap/Card'
// get Mob List from database
// get Mob Events from each mobs object

function MobCard() {

    return (
        <Fragment>
            <Card bg="info" text="white" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Info Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
            </Card>
            {/* card */}
                {/* Turnary object (?) if they click on day of the week or name of event - default current day of week */}
                {/* Option 1 - Day of the week */}
                    {/* display- event of the day, attendees */}
                {/* Option 2 - Event selected */}
                    {/* display- date, attendees, link to event info */}
        
            {/* scrollable within card */}

            
        </Fragment>
    );
}

export default MobCard;
