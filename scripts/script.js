let foodList = [];
let chosenFood = null;
let currentSearchIndex = 0;
let restaurantDisplay = document.getElementById("restaurants-display");
let api = "2da08fdb0e253646533d241423c90e16";
let coordsDisplay = document.getElementById("coords");
let retrievedRestaurants = [];
let processing = false;
var timer;

function setPosition(position) {
    latitude = position.coords.latitude;
    longitude = 
    coordsDisplay.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

function createFoodList() {
    let list = document.createElement("ul");
    list.setAttribute("id", "food-list")
    document.getElementById("main-div").appendChild(list);
}

function clearRestaurantDisplay() {
    restaurantDisplay.style.display = "none";
    restaurantDisplay.innerHTML = '';
    document.getElementById("display").innerHTML = '';
    retrievedRestaurants = [];
    currentSearchIndex = 0;
}

function addFood() {
    clearRestaurantDisplay();
    let input = document.getElementById("food-textbox").value.toLowerCase();
    if (input !== null && input !== "") {
        document.getElementById("food-list").style.display = "block";
        if (!foodList.includes(input)) {
            foodList.push(input);
        
            let foodItem = document.createElement("li");
            let inputNode = document.createTextNode(input);
            let removeItem = document.createElement("button");
            let removeText = document.createTextNode("\u2717");
            removeItem.appendChild(removeText)
            foodItem.appendChild(inputNode);
            foodItem.appendChild(removeItem);
        
            document.getElementById("food-list").appendChild(foodItem);
            removeItem.addEventListener('click', function() {
                document.getElementById("food-list").removeChild(foodItem);
            })
        }
        document.getElementById("food-textbox").value = null;
    }
}

function pickFood() {
    let numOfFoodItems = foodList.length;
    if (numOfFoodItems > 0) {
        let randNum = Math.floor(Math.random() * numOfFoodItems);
        chosenFood = foodList[randNum];
        document.getElementById("display").innerHTML = "<h2>It's " + chosenFood + " time!&#128516;</h2>";
        getPosition();
    } else {
        $('decide-button').popover('show');

    }
}

function getPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            searchRestaurants(position.coords.longitude, position.coords.latitude);
        });
    } else {
        coordsDisplay.innerHTML = "Geolocation is not supported by this browser."
    }
}

function searchRestaurants(longitude, latitude) {
    if (chosenFood !== null && chosenFood !== "") {
        document.getElementById("food-list").style.display = "none";
        $.ajax({
            type: 'GET',
            url: "https://developers.zomato.com/api/v2.1/search?q=" + chosenFood + "&start=" + currentSearchIndex + "&lat=" + latitude + "&lon=" + longitude + "&sort=real_distance&order=desc",
            // url: "https://developers.zomato.com/api/v2.1/search?q=" + chosenFood + "&start=" + currentSearchIndex + "&lat=49.283633&lon=-123.115201&sort=real_distance&order=desc",
            dataType: 'json',
            headers: {
                // "user-key": "d710754ce67200fb6fb9b5e26139f50e",
                "user-key": api,
               },
            success: function(data) {
                // console.log(data.restaurants);
                retrievedRestaurants = retrievedRestaurants.concat(data.restaurants)
                console.log(retrievedRestaurants)
                showRestaurants();
                removeFoodItems();
            },
        })
    }
    restaurantDisplay.style.display = "block";
}

function showRestaurants() {
    for (let i = 0 + currentSearchIndex; i < retrievedRestaurants.length; i++) {
        restaurantDisplay.innerHTML  += "<div class='card bg-light mb-3 ' style='width: 18rem;'>"
            + "<img class='card-img-top img-responsive' src='" + retrievedRestaurants[i].restaurant.thumb + "'><br>"
            + "<div class='card-body'>"
            + "<h5 class='card-title'>" + retrievedRestaurants[i].restaurant.name + "</h5>"
            + retrievedRestaurants[i].restaurant.location.address + "<br>" 
            + "<b>Cuisines</b>: " + retrievedRestaurants[i].restaurant.cuisines + "<br>"
            + "<b>Price range</b>: " + ("$".repeat(retrievedRestaurants[i].restaurant.price_range)) + "&nbsp; "
            + "<b>Rating</b>: " + retrievedRestaurants[i].restaurant.user_rating.aggregate_rating + " (" + retrievedRestaurants[i].restaurant.user_rating.votes + ")<br><br>"
            + "<a href='" + retrievedRestaurants[i].restaurant.url + "' target='_blank' class='btn btn-primary'>See more</a>"
            + "</div>"
            + "</div>"
        currentSearchIndex++;
    }
}

function removeFoodItems() {
    let parent = document.getElementById("food-list");
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
    foodList.length = 0;
}

$(window).scroll(function() {
    if($(window).scrollTop() >= ($(document).height() - $(window).height() - 200)) {
        if (timer) {
            window.clearTimeout(timer);
        }
        timer = window.setTimeout(function() {
            getPosition();
        }, 100);
        console.log(currentSearchIndex)
    }
});

createFoodList();
document.getElementById("food-submit").addEventListener('click', addFood);
document.getElementById("food-textbox").addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        addFood();
    }
});

document.getElementById("decide-button").addEventListener('click', pickFood);
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
  });