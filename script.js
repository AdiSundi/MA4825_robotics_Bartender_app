function myFunction(dataToSend) {

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