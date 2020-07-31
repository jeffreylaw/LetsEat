import React, { useEffect, useRef, useState } from 'react'

const Slider = ({foodList, setChosenFood, setSpinning, setFoodList, spinning, chosenFood}) => {
    const sliderRef = useRef(null)
    const [randomChosenFood, setRandomChosenFood] = useState('')
    const [expandedList, setExpandedList] = useState([])
    console.log(randomChosenFood)
    useEffect(() => {
        if (spinning) {
            console.log('a')
            setExpandedList([].concat(...Array(10).fill(foodList)))
            setRandomChosenFood(foodList[Math.floor(Math.random() * foodList.length)])
        }
    }, [foodList, spinning])

    useEffect(() => {
        document.documentElement.style.setProperty('--item-count', expandedList.length)
        document.documentElement.style.setProperty('--chosen-i', expandedList.lastIndexOf(randomChosenFood))
    }, [expandedList, randomChosenFood])

    useEffect(() => {
        if (chosenFood === '' && randomChosenFood.length > 0) {
            const spunCallback = () => {
                console.log('Callback')
                setTimeout(() => {
                    setSpinning(false)
                    setChosenFood(randomChosenFood)
                    // setRandomChosenFood('')
                    setFoodList([])
                }, 1000)
            }
            sliderRef.current.addEventListener('animationend', spunCallback)
        }
    }, [setSpinning, setChosenFood, randomChosenFood, setFoodList, chosenFood])

    
    return (
        <div className='slider'>
            {randomChosenFood}
            <div className='box'>
                <ul className='sliderList' ref={sliderRef}>
                    {expandedList.map((food, i) => {
                        return <li key={i} className='sliderItem'>{food}</li>
                    })}
                </ul>

            </div>

        </div>
    )
    // return (
    //     <div className='slider'>
    //         <div className='box'>
    //             <ul className='sliderList'>
    //                 <li className='sliderItem'>One</li>
    //                 <li className='sliderItem'>Two</li>
    //                 <li className='sliderItem'>Three</li>
    //                 <li className='sliderItem'>Four</li>
    //                 <li className='sliderItem'>Five</li>
    //             </ul>  
    //         </div>
    //     </div>
    // )
}

export default Slider