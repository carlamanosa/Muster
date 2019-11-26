/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from "react";
import Table from 'react-bootstrap/Table';
// import Mobs from "../../utils/Account/Mobs";
// import Events from "../../utils/Account/Events";

function MobList() {
    // Events.refreshDbOnLoad();
    // Mobs.refreshOnLoad();
    return (
        <Fragment>
               <Table id="mobList" responsive="sm">
    <thead>
      <tr>
          My Events
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Sunday</td>
      </tr>
      <tr>
        <td>Events</td>
      </tr>
      <tr>
        <td>Monday</td>
      </tr>
      <tr>
        <td>Events</td>
      </tr>
      <tr>
        <td>Tuesday</td>
      </tr>
      <tr>
        <td>Events</td>
      </tr>
      <tr>
        <td>Wednesday</td>
      </tr>
      <tr>
        <td>Events</td>
      </tr>
      <tr>
        <td>Thursday</td>
      </tr>
      <tr>
        <td>Events</td>
      </tr>
      <tr>
        <td>Friday</td>
      </tr>
      <tr>
        <td>Events</td>
      </tr>
      <tr>
        <td>Saturday</td>
      </tr>
      <tr>
        <td>Events</td>
      </tr>
    </tbody>
  </Table>




        </Fragment>
    );
}

export default MobList;
