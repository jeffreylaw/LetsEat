import React from 'react'
import Button from 'react-bootstrap/Button'


const AddItems = ({ restaurantList, newSearch, foodInput, handleFoodInputChange, addFoodItem, handleChooseButton, spinning, loading}) => {

    if (restaurantList.length > 0) {
        return <Button onClick={newSearch}>Start new search</Button> 
    }

    return (
        <>
            <input type="text" value={foodInput} onChange={handleFoodInputChange}/>
            <Button onClick={addFoodItem} className='ml-1'>Add</Button><Button onClick={handleChooseButton} disabled={spinning || loading} className='ml-1'>Decide for me</Button><br />
        </>
    )
}

export default AddItems