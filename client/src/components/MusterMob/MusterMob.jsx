import React from "react";
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalBody from 'react-bootstrap/ModalBody';
import MobCard from "../Event/MobCard";
import "./MusterMob.css";


function MusterMob() {

    return (
        <ModalDialog id="saved-mob">
            <ModalBody style={{ 'maxHeight': '23rem', 'paddingTop': '1rem', 'minHeight': '23rem', 'overflowY': 'auto' }}>
                <MobCard />
            </ModalBody>
        </ModalDialog>
    )
}

export default MusterMob;
