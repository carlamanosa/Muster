/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from "react";
// geting Mob List from database 
// get info from mob list objects 

function MobList() {
    return (
    //    list of mob friends
            //  col 1-display name, link to profile
            // search for friends (bar)
            // col 2- common friends


        <Fragment>
            <Card className="m-2">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle class="mb-2 text-muted">{scent}</Card.Subtitle>
                <Card.Text>The candle currently has a height of {height} cm</Card.Text>
            </Card.Body>
        </Card>
        </Fragment>
    );
}

export default MobList;
