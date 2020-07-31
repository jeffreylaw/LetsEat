import React, { useState, useEffect, useRef } from 'react';
import FoodList from './components/FoodList'
import Notification from './components/Notification'
import RestaurantList from './components/RestaurantList'
import AddItems from './components/AddItems'
import Tutorial from './components/Tutorial'
import Scroller from './components/Scroller'
import restaurantService from './services/restaurants'
import Loader from 'react-loader-spinner'
import { Navbar, Button, Row, Container } from 'react-bootstrap'

const App = () => {
  const [foodList, setFoodList] = useState([])
  const [showFoodList, setShowFoodList] = useState(true)
  const [foodInput, setFoodInput] = useState('')
  const [chosenFood, setChosenFood] = useState('')
  const [startingIndex, setStartingIndex] = useState(0)
  const [coordinates, setCoordinates] = useState({longitude: null, latitude: null})
  const [errorMessage, setErrorMessage] = useState(null)
  const [responseMessage, setResponseMessage] = useState(null)
  const [additionalResponseMessage, setAdditionalResponseMessage] = useState(null)
  const [restaurantList, setRestaurantList] = useState([])
  const [loading, setLoading] = useState(false)
  const [showUpButton, setShowUpButton] = useState(false)
  const addItemsRef = useRef()
  const restaurantsRef = useRef()
  const tutorialRef = useRef()
  const [spinning, setSpinning] = useState(false)

  useEffect(() => {
    if (chosenFood && coordinates.latitude && coordinates.longitude) {
      const getRestaurants = () => {
        setLoading(true)
        restaurantService
        .get(chosenFood, coordinates, startingIndex)
        .then(restaurantsData => {
          restaurantsData = restaurantsData.map(obj => {
            delete obj.restaurant.apikey
            return obj.restaurant
          })
          if (startingIndex > 0 && restaurantsData.length === 0) {
            setAdditionalResponseMessage(`No more restaurants found`)
              setTimeout(() => {
                setAdditionalResponseMessage(null)
              }, 2000)
          } else if (restaurantsData.length === 0) {
            setResponseMessage(`No restaurants found with the keyword: ${chosenFood}`)
            setTimeout(() => {
              setResponseMessage(null)
            }, 2000)
            setLoading(false)
            newSearch()
            return
          }
          if (restaurantsData.length > 0) {
            setRestaurantList(prev => {
              return prev.concat(restaurantsData)
            })
          }
          if (startingIndex === 0) {
            window.scrollTo({ top: addItemsRef.current.offsetTop - 10, behavior: 'smooth'})
          }
          setLoading(false)
        })
        .catch((error) => {
          setErrorMessage(`Error: ${error}`)
          setTimeout(() => {
            setLoading(false)
            setErrorMessage(null)
          }, 3000)        
        })
      }
      getRestaurants()
    }
  
  }, [chosenFood, coordinates, startingIndex, errorMessage])

  const handleFoodInputChange = (event) => {
    setFoodInput(event.target.value)
  } 

  const addFoodItem = () => {
    const newFoodItem = foodInput.toLowerCase().trim()
    setShowFoodList(true)
    setFoodInput('')
    if (newFoodItem.length < 3) {
      setResponseMessage('Item name must be longer than 2 characters')
      setTimeout(() => {
        setResponseMessage(null)
      }, 1000)
      return
    }
    if (newFoodItem.includes('&')) {
      setResponseMessage('Item name cannot contain & character')
      setTimeout(() => {
        setResponseMessage(null)
      }, 1000) 
      return
    }
    if (foodList.includes(newFoodItem)) {
      setResponseMessage('Food item is already in the list')
      setTimeout(() => {
        setResponseMessage(null)
      }, 1000)
    }
    if (!foodList.includes(newFoodItem) && newFoodItem.length > 0) {
      setFoodList(foodList.concat(newFoodItem))
    }
  }

  const handleChooseButton = () => {
    if (foodList.length === 0) {
      setResponseMessage(`No items added`)
      setTimeout(() => {
        setResponseMessage(null)
      }, 2000)
      return
    }
    if (!locationSet()) {
      handleSetLocation()
    }
    setShowFoodList(false)
    setSpinning(true)
    // setFoodList([])
    // setChosenFood(foodList[Math.floor(Math.random() * foodList.length)])
  }

  const newSearch = () => {
    setRestaurantList([])
    setStartingIndex(0)
    setFoodList([])
    setChosenFood('')
    setShowFoodList(true)
  }

  const showError = (error) => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        setErrorMessage('Location permission was declined, please enable before trying again.')
        setTimeout(() => { 
          setErrorMessage(null)
        }, 5000)
        break;
      case error.POSITION_UNAVAILABLE:
        setErrorMessage('Location information is unavailable.')
        setTimeout(() => { 
          setErrorMessage(null)
        }, 5000)
        break;
      case error.TIMEOUT:
        setErrorMessage('The request to get user location timed out.')
        setTimeout(() => { 
          setErrorMessage(null)
        }, 5000)
        break;
      default:
        setErrorMessage('An unknown error occurred.')
        setTimeout(() => { 
          setErrorMessage(null)
        }, 5000)
    }
  }

  const handleSetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        // console.log('Setting location...', position)
        setCoordinates({longitude: position.coords.longitude, latitude: position.coords.latitude})
      }, showError, { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 })
    } else {
      setErrorMessage('Geolocation is not supported by this browser')
      setTimeout(() => { 
        setErrorMessage(null)
      }, 5000)
    }
  }

  const locationSet = () => {
    if (coordinates.latitude !== null && coordinates.latitude !== null) {
      return true
    }
    return false
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowUpButton(false)
        } else {
          setShowUpButton(true)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0
      }
    );
    if (tutorialRef.current) {
      observer.observe(tutorialRef.current);
    }
  }, [tutorialRef]);

  const clearState = () => {
    setFoodList([])
    setShowFoodList(true)
    setFoodInput('')
    setChosenFood('')
    setStartingIndex(0)
    setCoordinates({longitude: null, latitude: null})
    setRestaurantList([])
    setShowUpButton(false)
  }

  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#" onClick={() => clearState()}>LetsEat</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Created by: <a>Jeffrey Law</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Navbar>
      <Container fluid>
        <Row className="justify-content-center">
            <Notification message={errorMessage} type='error' />
        </Row>
        <Row ref={tutorialRef}>
          <Tutorial />
        </Row>
        <Row className="justify-content-center" ref={addItemsRef}>
          <AddItems restaurantList={restaurantList} newSearch={newSearch} foodInput={foodInput} handleFoodInputChange={handleFoodInputChange} addFoodItem={addFoodItem} handleChooseButton={handleChooseButton} spinning={spinning} loading={loading} />
        </Row>
        <Row className="justify-content-center mt-2">
          <Notification message={responseMessage} type='error' />
        </Row>
        <Row className="justify-content-center">
          { chosenFood && restaurantList.length > 0 && <h1>It's {chosenFood} time! <img className='birdIcon' src={require('./images/cute.svg')} alt='bird icon' /></h1> }
          <FoodList foodList={showFoodList ? foodList : []} setFoodList={setFoodList} />
        </Row>
        <Row className="justify-content-center">
          { spinning && foodList.length > 0 && <Scroller foodList={foodList} setChosenFood={setChosenFood} setSpinning={setSpinning} setFoodList={setFoodList} spinning={spinning} chosenFood={chosenFood} /> }
        </Row>
      </Container>

      <Container fluid>
          <RestaurantList restaurants={restaurantList} coordinates={coordinates} />

          <Row className="justify-content-center restaurant-display" ref={restaurantsRef}>
            { loading && <Loader type='Circles' color='#00BFFF' /> }
            { !loading && chosenFood && restaurantList.length > 0 && restaurantList.length !== 100 && <Button onClick={() => setStartingIndex(startingIndex + 20)}>Show more restaurants</Button> }
          {/* <Button style={{ display: (restaurantList.length > 0 && showUpButton) ? 'inline-block' : 'none' }} id="pageUp" onMouseDown={(e) => e.preventDefault()} onClick={() => window.scrollTo({ top: addItemsRef.current.offsetTop - 10, behavior: 'smooth'})}>{'\u27a4'}</Button> */}
          </Row>
          <Row className="justify-content-center mb-5">
              <Notification message={additionalResponseMessage} type='error' />
              <Button style={{ display: (restaurantList.length > 0 && showUpButton) ? 'inline-block' : 'none' }} id="pageUp" onMouseDown={(e) => e.preventDefault()} onClick={() => window.scrollTo({ top: addItemsRef.current.offsetTop - 10, behavior: 'smooth'})}>{'\u27a4'}</Button>

            </Row>
        </Container>
    </div>
  )
}

export default App;