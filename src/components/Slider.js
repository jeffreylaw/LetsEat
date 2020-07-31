import React, { useEffect, useRef } from 'react'

const Slider = ({foodList, setChosenFood, setSpinning, setFoodList}) => {
    const sliderRef = useRef(null)
    let list = [].concat(...Array(10).fill(foodList))
    // let list = [].concat(foodList).concat(foodList).concat(foodList).concat(foodList).concat(foodList)
    console.log(list)
    const randomChosenFood = list[Math.floor(Math.random() * list.length)]
    // list = [].concat(...Array(4).fill(list))
    console.log('number of things', list.length, 'randomchosen', randomChosenFood)
    
    useEffect(() => {
        const spunCallback = () => {
            console.log('Callback')
            setTimeout(() => {
                setSpinning(false)
                setChosenFood(randomChosenFood)
                setFoodList([])
            }, 1000)
        }

        sliderRef.current.addEventListener('animationend', spunCallback)
    }, [setSpinning, setChosenFood, randomChosenFood, setFoodList])

    document.documentElement.style
    .setProperty('--item-count', list.length)

    document.documentElement.style
    .setProperty('--chosen-i', list.lastIndexOf(randomChosenFood))
    
    return (
        <div className='slider'>
            <div className='box'>
                <ul className='sliderList' ref={sliderRef}>
                    {list.map((food, i) => {
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