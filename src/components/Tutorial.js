import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Tutorial = () => {

    return (
        <Container fluid>
            {/* <h1 className='text-center mt-2 mb-0 display-4'>LetsEat</h1> */}
            <Row className='d-flex flex-column'>
                <Col className='d-flex flex-sm-row flex-column align-items-center justify-content-center'>
                    <img src={require('../images/dishes.svg')} style={{ width: '16rem', marginRight: '0' }} alt='dishes with smiley face' />
                    <p className='lead intro-p'>LetsEat is a eatery decider app for the undecisive. Create a list of dishes or cuisines of what you or your friends might want to eat and we will do the decision-making for you.
                    </p>
                </Col>
                <Col className='d-flex align-items-center justify-content-center lead'>
                    <ol>
                        <h3 className='font-weight-light'>How to use</h3>
                        <li>Enter dishes or cuisines that you might like to eat.</li>
                        <li>Let us randomly choose an item from the list.</li>
                        <li>Browse through the relevant restaurants around your location.*</li>
                        <p><small className='text-muted'>*Access to your location required. Accuracy may vary on PC devices.</small></p>

                    </ol>
                </Col>
            </Row>
        </Container>
    )
}

export default Tutorial