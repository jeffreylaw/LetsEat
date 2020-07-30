import React from 'react'
import Button from 'react-bootstrap/Button'


const FoodList = ({foodList, setFoodList}) => {
    const ulStyles = {
        margin: '10px'
    }

    const liStyles = {
        // marginTop: '2px',
        // marginBottom: '2px'
    }

    if (foodList.length === 0) {
        return null
    }

    return (
        <div>
            <ul className='list-group list-group-flush' style={ulStyles}>
            {foodList.map(food => {
                    return <li className='list-group-item' style={liStyles} key={food}>{food} <Button variant="danger" onClick={() => setFoodList(foodList.filter(item => item !== food))}>{'\u2715'}</Button></li>
            })}
            </ul>
        </div>
    )
}

export default FoodList

