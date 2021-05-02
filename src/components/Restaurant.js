import React from 'react'
import Card from 'react-bootstrap/Card'


const Restaurant = ({ restaurant, coordinates }) => {
    let address = restaurant.location.address.split(' ').join('+').replace(/,/g, '')
    let formattedCoordinates = `${coordinates.latitude},${coordinates.longitude}`
    let directionsQuery = `https://www.google.com/maps/dir/?api=1&origin=${formattedCoordinates}&destination=${restaurant.name}+${address}`
    // let searchOnlyQuery = `https://www.google.com/maps/search/?api=1&query=${restaurant.name}+${address}`

    return (
        <Card style={{ width: '18rem', margin: '0 auto', marginBottom: '10px' }}>
            <Card.Img variant="top" src={restaurant.thumb || require('../images/non_existent_image2.jpg')} />
            <Card.Body>
                <Card.Title className='centerText'><a href={restaurant.url} target='_blank' rel='noopener noreferrer'>{restaurant.name}</a></Card.Title>
                <Card.Subtitle className='text-dark'>{restaurant.location.address}</Card.Subtitle>
                <Card.Text>
                    <b>Hours: </b>{restaurant.timings}<br/>
                    <b>Cuisines: </b>{restaurant.cuisines} <br/>
                    <b>Price range: </b>{'$'.repeat(restaurant.price_range)}  <b>Rating: </b>{restaurant.user_rating.aggregate_rating} ({restaurant.user_rating.votes})
                </Card.Text>
                <a href={directionsQuery} className="btn btn-outline-dark mt-1" style={{display: 'block' }} target='_blank' rel='noopener noreferrer'>Get Directions</a>

            </Card.Body>
        </Card>
    )
}

export default Restaurant