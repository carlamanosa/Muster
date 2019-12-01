import React, { useEffect, Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from '../../utils/Account/User';
import Event from '../../utils/Account/Events';
import MobList from "../../components/MobList/MobList";
import { EventMobCard } from "../../components";
import { EventUserWeek } from "../../components";
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button';


import './Home.css';
import TestingThings from "../../components/Testing/Testing";
import MobCard from "../../components/Event/MobCard";

export default function () {

    User.refreshOnLoad();
    // we eagerly load events here so when the user switches pages it will appear faster. 
    Event.refreshDbOnLoad();
    const [{ user }] = User.useContext();
    const [eventDispatch] = Event.useContext();

    // useEffect(() => {
    //     const startPos = {
    //         lat: 0,
    //         long: 0
    //     };
    //     const geoSuccess = function (position) {
    //         startPos.lat = position.coords.latitude;
    //         startPos.long = position.coords.longitude;
    //         console.log("userLocation: ", startPos);
    //         console.log("Call USER_LOCATION dispatch here");
    //     };
    //     navigator.geolocation.getCurrentPosition(geoSuccess);
    // }, []);


    return (
        <Container className="mt-5">
            <Row>
                <Col >
                    <h2>
                        Welcome{" "}
                        <span className="member-name">
                            {user.firstName} ({user.displayName})
                        </span>
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <EventUserWeek />
                </Col>
                <Col>
                <h2>Muster Mob</h2>
                <Modal>
                <ModalDialog>
                <ModalHeader>
                    <ModalTitle>Modal title</ModalTitle>
                </ModalHeader>

                <ModalBody style={{ 'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto' }}>One fine body...
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eos deleniti unde assumenda ipsa, optio blanditiis provident quam, dignissimos impedit iste! Ipsam beatae ex facilis esse labore unde temporibus nihil.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit, rem quaerat eum numquam commodi. Rerum, reprehenderit iusto! Ducimus eos pariatur harum quo rem eaque animi recusandae vitae labore facilis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam veniam, qui, dicta velit nostrum tempora voluptas blanditiis aliquam corrupti, quibusdam illo architecto mollitia. Tempora corporis fugiat necessitatibus aliquid ipsam.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis sint facilis voluptatum unde dolor quis, iste quidem quod sed dolorum natus optio nesciunt aspernatur voluptate eveniet asperiores soluta earum? Facilis.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nesciunt repudiandae dicta laudantium voluptatum ut mollitia, neque harum! Maiores in nisi incidunt voluptates magni voluptas ullam at voluptatem libero distinctio!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quae nemo cum pariatur maiores fugiat fugit at veritatis perspiciatis itaque, sit ad nisi ullam est obcaecati, quo commodi assumenda? Magni.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dolores. Voluptatibus, ducimus. Iusto officia distinctio aliquam temporibus ipsam cupiditate modi rem soluta veniam. Libero eveniet beatae necessitatibus ducimus voluptate accusantium.
                </ModalBody>

                <ModalFooter>
                    <Button>Close</Button>
                    <Button bsStyle="primary">Save changes</Button>
                </ModalFooter>
            </ModalDialog>
                </Modal>
                
                </Col>
            </Row>
            <Row>
                <Col>
                    <MobList />
                </Col>
                </Row>
        </Container>
    );
}
