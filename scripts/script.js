let foodList = [];
let chosenFood = null;
let currentSearchIndex = 0;
let restaurantDisplay = document.getElementById("restaurants-display");
let api = "2da08fdb0e253646533d241423c90e16";


function createFoodList() {
    let list = document.createElement("ul");
    list.setAttribute("id", "food-list")
    document.getElementById("main-div").appendChild(list);
}

function addFood() {
    let input = document.getElementById("food-textbox").value.toLowerCase();
    if (input !== null && input !== "") {
        document.getElementById("food-list").style.display = "block";
        if (!foodList.includes(input)) {
            foodList.push(input);
        
            let foodItem = document.createElement("li");
            let inputNode = document.createTextNode(input);
            let removeItem = document.createElement("button");
            let removeText = document.createTextNode("X");
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
    document.getElementById("food-list").style.display = "block";
    let numOfFoodItems = foodList.length;
    if (numOfFoodItems > 0) {
        let randNum = Math.floor(Math.random() * numOfFoodItems);
        chosenFood = foodList[randNum];
        document.getElementById("display").innerHTML = "<b>It's " + chosenFood + " time!&#128516;</b>";
    }
}

function searchRestaurants() {
    if (chosenFood !== null && chosenFood !== "") {
        document.getElementById("food-list").style.display = "none";
        currentSearchIndex = 0;
        $.ajax({
            type: 'GET',
            url: "https://developers.zomato.com/api/v2.1/search?q=" + chosenFood + "&start=" + currentSearchIndex + "&lat=49.283633&lon=-123.115201&sort=real_distance&order=desc",
            dataType: 'json',
            headers: {
                // "user-key": "d710754ce67200fb6fb9b5e26139f50e",
                "user-key": api,
               },
            success: function(data) {
                console.log(data.restaurants);
                data = data.restaurants;
                let innerHtml = '';
                for (let i = 0; i < data.length; i++) {
                    console.log(data[i]);
                    innerHtml += "<div class='restaurant-div'><span class='restaurant-name'>" 
                    + "<a href='" + data[i].restaurant.url + "' target='_blank'>"
                    + data[i].restaurant.name + "</a></span><br>" 
                    + data[i].restaurant.location.address + "<br>" 
                    + "<img src='" + data[i].restaurant.thumb + "'><br>"
                    + "<b>Cuisines</b>: " + data[i].restaurant.cuisines 
                    + "<br><b>Price range</b>: " + data[i].restaurant.price_range + "&nbsp;"
                    + "<b>Rating</b>: " + data[i].restaurant.user_rating.aggregate_rating + " <b>Reviews</b>: " + data[i].restaurant.user_rating.votes;
                    innerHtml += "<br></div>";
                    currentSearchIndex++;
                }
                restaurantDisplay.innerHTML = innerHtml;
            },
        })
    }
    restaurantDisplay.style.display = "block";
}

function showMoreRestaurants() {
    $.ajax({
        type: 'GET',
        url: "https://developers.zomato.com/api/v2.1/search?q=" + chosenFood + "&start=" + currentSearchIndex + "&lat=49.283633&lon=-123.115201&sort=real_distance&order=desc",
        dataType: 'json',
        headers: {
            // "user-key": "d710754ce67200fb6fb9b5e26139f50e",
            "user-key": api,
           },
        success: function(data) {
            console.log(data.restaurants);
            data = data.restaurants;
            let innerHtml = '';
            for (let i = 0; i < data.length; i++) {
                console.log(data[i]);
                innerHtml += "<div class='restaurant-div'><span class='restaurant-name'>" 
                + "<a href='" + data[i].restaurant.url + "' target='_blank'>"
                + data[i].restaurant.name + "</a></span><br>" 
                + data[i].restaurant.location.address + "<br>" 
                + "<img src='" + data[i].restaurant.thumb + "'><br>"
                + "<b>Cuisines</b>: " + data[i].restaurant.cuisines 
                + "<br><b>Price range</b>: " + data[i].restaurant.price_range + "&nbsp;"
                + "<b>Rating</b>: " + data[i].restaurant.user_rating.aggregate_rating + " <b>Reviews</b>: " + data[i].restaurant.user_rating.votes;
                innerHtml += "<br></div>";
                currentSearchIndex++;
            }
            restaurantDisplay.innerHTML = innerHtml;
        },
    })
}


createFoodList();
document.getElementById("food-submit").addEventListener('click', addFood);
document.getElementById("decide-button").addEventListener('click', pickFood);
document.getElementById("search-button").addEventListener('click', searchRestaurants);
document.getElementById("more-button").addEventListener('click', showMoreRestaurants)