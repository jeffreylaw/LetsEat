let foodList = [];
let chosenFood = null;
let queryStart = 0;


function createFoodList() {
    let list = document.createElement("ul");
    list.setAttribute("id", "food-list")
    document.getElementById("main-div").appendChild(list);
}

function addFood() {
    let input = document.getElementById("food-textbox").value.toLowerCase();
    if (input !== null && input !== "") {
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
    document.getElementById("food-list").style.display = "initial";
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
        console.log('chosen', chosenFood);
        $.ajax({
            type: 'GET',
            url: "https://developers.zomato.com/api/v2.1/search?q=" + chosenFood + "&lat=49.283633&lon=-123.115201&sort=real_distance&order=desc",
            // url: "https://developers.zomato.com/api/v2.1/search?q=" + chosenFood + "&lat=49.283121&lon=-123.115304&count=100&order=asc",
            dataType: 'json',
            headers: {
                "user-key": "d710754ce67200fb6fb9b5e26139f50e",
                'Content-Type': 'application/x-www-form-urlencoded'
               },
            success: function(data) {
                console.log(data);
            },
        })

        // let settings = {
        //     "async": true,
        //     "crossDomain": true,
        //     "url": "https://developers.zomato.com/api/v2.1/search?q=pizza&lat=49.283121&lon=-123.115304&count=100",
        //     "method": "GET",
        //     "headers": {
        //      "user-key": "d710754ce67200fb6fb9b5e26139f50e",
        //      'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        // }
        // $.getJSON(settings, function(data) {

        //     data = data.restaurants;
        //     var html = "";
         
        //     $.each(data, function(index, value) {
         
        //      var x = data[index];
        //       console.log(typeof x);
        //      $.each(x, function(index, value) {
        //       var location = x.restaurant.location;
        //       var userRating = x.restaurant.user_rating;
        //       console.log(location);
        //       console.log(userRating);
        //       html += "<div class='data img-rounded'>";
        //       html += "<div class='rating'>";
         
        //       html += "<span title='" + userRating.rating_text + "'><p style='color:white;background-color:#" + userRating.rating_color + ";border-radius:4px;border:none;padding:2px 10px 2px 10px;text-align: center;text-decoration:none;display:inline-block;font-size:16px;float:right;'><strong>" + userRating.aggregate_rating + "</strong></p></span><br>";
        //       html += "  <strong class='text-info'>" + userRating.votes + " votes</strong>";
        //       html += "</div>";
        //       html += "<img class='resimg img-rounded' src=" + value.thumb + " alt='Restaurant Image' height='185' width='185'>";
        //       html += "<a href=" + value.url + " target='_blank' class='action_link'><h2 style='color:red;'><strong>" + value.name + "</strong></h2></a>";
        //       html += "  <strong class='text-primary'>" + location.locality + "</strong><br>";
        //       html += "  <h6 style='color:grey;'><strong>" + location.address + "</strong></h6><hr>";
        //       html += "  <strong>CUISINES</strong>: " + value.cuisines + "<br>";
        //       html += "  <strong>COST FOR TWO</strong>: " + value.currency + value.average_cost_for_two + "<br>";
        //       html += "</div><br>";
        //      });
        //     });
        //     $(".message").html(html);
        //    });
        //      }
    }
}

createFoodList();
document.getElementById("food-submit").addEventListener('click', addFood);
document.getElementById("decide-button").addEventListener('click', pickFood);
document.getElementById("search-button").addEventListener('click', searchRestaurants);
