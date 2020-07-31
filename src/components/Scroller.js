import React, { useEffect, useRef, useState } from 'react'

const Scroller = ({foodList, setChosenFood, setSpinning, setFoodList, spinning, chosenFood}) => {
    const scrollerRef = useRef(null)
    const [randomChosenFood, setRandomChosenFood] = useState('')
    const [expandedList, setExpandedList] = useState([])
    useEffect(() => {
        if (spinning) {
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
                setTimeout(() => {
                    setSpinning(false)
                    setChosenFood(randomChosenFood)
                    setFoodList([])
                }, 1000)
            }
            scrollerRef.current.addEventListener('animationend', spunCallback)
        }
    }, [setSpinning, setChosenFood, randomChosenFood, setFoodList, chosenFood])

    
    return (
        <div className='scroller'>
            <div className='box'>
                <ul className='scrollerList' ref={scrollerRef}>
                    {expandedList.map((food, i) => {
                        return <li key={i} className='scrollerItem'>{food}</li>
                    })}
                </ul>

            </div>

        </div>
    )
}

export default Scroller