/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from "react";

function MobList() {
    return (
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
