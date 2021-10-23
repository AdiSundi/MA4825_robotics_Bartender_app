let intToSend = 0;

function drinkCodeToDrink(drinkCode) {
    if (drinkCode == 1) {
        drink = "Jaeger";
        return drink;
    }
    if (drinkCode == 2) {
        drink = "Red Bull";
        return drink;
    }
    if (drinkCode == 3) {
        drink = "the mystery drink";
        return drink;
    }
}

function myFunction(drinkCode) {
    if (intToSend > 10) {
        intToSend = 0;
    }
    if (0 < intToSend && intToSend < 10) {
        intToSend = intToSend + (10 * drinkCode);
        alert("Your order has been placed!");
        alert(`sending${intToSend}`);
        sendData(intToSend);
    }
    if (intToSend == 0) {
        intToSend = drinkCode;
        if (confirm(`You have chosen ${drinkCodeToDrink(drinkCode)}!\n Would you like to mix it with another drink?`)) {
            alert("Choose your second drink!");
        } else {
            intToSend = intToSend + (10 * intToSend);
            alert("Your order has been placed!");
            //alert(`sending${intToSend}`);
            sendData(intToSend);
        }
    }
}

function sendData(dataToSend) {

    var url = "https://cors-anywhere.herokuapp.com/https://things.ubidots.com/api/v1.6/devices/RasPi/";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-Auth-Token", "BBFF-2BoQtMzRrAltynSTpJK7JtbsB3oQ46");
    xhr.setRequestHeader("Authorization", "Bearer BBFF-2BoQtMzRrAltynSTpJK7JtbsB3oQ46");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };
    let timest = Date.now()

    var data = {
        "drinkno": dataToSend,
        "timestamp": timest
    };
    console.log(JSON.stringify(data));
    xhr.send(JSON.stringify(data));

}