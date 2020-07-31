import React from 'react'
import Button from 'react-bootstrap/Button'


const FoodList = ({ foodList, setFoodList }) => {
    const ulStyles = {
        margin: '10px'
    }

    if (foodList.length === 0) {
        return null
    }

    return (
        <div>
            <ul className='list-group list-group-flush' style={ulStyles}>
            {foodList.map(food => {
                    return <li className='list-group-item list-item text-center' key={food}>{food} <Button className='ml-2 float-right' variant="danger" onClick={() => setFoodList(foodList.filter(item => item !== food))}>{'\u2715'}</Button></li>
            })}
            </ul>
        </div>
    )
}

export default FoodList

