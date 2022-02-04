import React, { useEffect, useRef, useState } from 'react'

const Scroller = ({foodList, setChosenFood, setSpinning, setFoodList, spinning, chosenFood}) => {
    const scrollerRef = useRef(null)
    const [randomChosenFood, setRandomChosenFood] = useState('')
    const [expandedList, setExpandedList] = useState([])
    useEffect(() => {
        if (spinning) {
            let arr = foodList.concat(foodList)
            let randomFood = foodList[Math.floor(Math.random() * foodList.length)]
            console.log(randomFood)
            setExpandedList(arr)
            setRandomChosenFood(randomFood)
        }
    }, [foodList, spinning])

    useEffect(() => {
        document.documentElement.style.setProperty('--item-count', expandedList.length)
        document.documentElement.style.setProperty('--chosen-i', expandedList.lastIndexOf(randomChosenFood))
    }, [expandedList, randomChosenFood])
    
    return (
        <div className='scroller'>
            <div className='box'>
                <ul className='scrollerList' ref={scrollerRef} onAnimationEnd={() => {
                    console.log("Done spinning")
                    setChosenFood(randomChosenFood)
                    setFoodList([])
                    setSpinning(false)
                }}>
                    {expandedList.map((food, i) => {
                        return <li key={i} className='scrollerItem'>{food}</li>
                    })}
                </ul>

            </div>

        </div>
    )
}

export default Scroller