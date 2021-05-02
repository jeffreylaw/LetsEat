import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const Intro = () => {

    return (
        <Container fluid>
            <Row className='d-flex flex-column'>
                <Col className='d-flex flex-sm-row flex-column align-items-center justify-content-center'>
                    {/* <img src={require('../images/dishes.svg')} style={{ width: '16rem', marginRight: '0' }} alt='dishes with smiley face' /> */}
                    <p className='lead intro-p'><b>LETSEAT</b> is a cuisine decider app for the undecisive.<br /><br />Create a list of dishes or cuisines of what you or your friends might want to eat and we will do the decision-making for you.
                    </p>
                </Col>
                <Col className="d-flex justify-content-center">
                <a href="#main"><p><Button variant="light"><b>Get Started</b></Button></p></a>
                </Col>
            </Row>
        </Container>
    )
}

export default Intro