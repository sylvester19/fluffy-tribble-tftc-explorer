import React from "react";
import { Image, Col, Card } from 'react-bootstrap'

const Dashboard2 = ({txs}) => {
    return (
        <Col xs={12} md={12} lg={12}>
            <Card classMap="shadowCard">
                <Card.Header>Dashboard 2</Card.Header>
                <Card.Body>
                    <Image src="https://via.placeholder.com/150" roundedCircle />

                </Card.Body>
            </Card>

        </Col>
    );
};

export default Dashboard2;