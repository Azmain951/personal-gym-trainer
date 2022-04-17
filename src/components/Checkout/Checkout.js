import React from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';

const Checkout = () => {

    const handleCheckout = e => {
        e.preventDefault();
    }

    return (
        <div className='w-50 mx-auto border py-4 px-5 my-4'>
            <h1 className='text-center mb-4'>Checkout</h1>
            <Form onSubmit={handleCheckout} className='mt-2'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formGridContact">
                        <Form.Label>Contact No.</Form.Label>
                        <Form.Control placeholder="+880" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Coaching Package</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose One</option>
                            <option>Couples Coaching</option>
                            <option>Individualized Online Coaching</option>
                            <option>One to One Coaching</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Division</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Button variant="dark" type="submit">
                    Proceed Checkout
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;