import React from 'react'
import Restaurant from './Restaurant'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


const RestaurantList = ({ restaurants, coordinates }) => {
    // console.log(restaurants)
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                {restaurants.map(restaurant => 
                    <Restaurant key={restaurant.id} restaurant={restaurant} coordinates={coordinates} />
                )}
            </Row>
        </Container>
    )
}

export default RestaurantList