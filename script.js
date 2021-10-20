function myFunction(dataToSend) {
    var url = "https://things.ubidots.com/api/v1.6/devices/RasPi/";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-Auth-Token", "BBFF-2BoQtMzRrAltynSTpJK7JtbsB3oQ46");
    xhr.setRequestHeader("Authorization", "Bearer BBFF-2BoQtMzRrAltynSTpJK7JtbsB3oQ46");
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");


    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = `{"drinkno":4,
     "timestamp":${Date.now}
    }`;

    xhr.send(data);

    /*
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

    var data = `{"drinkno":${dataToSend},
                 "timestamp":${Date.now()},
                }`;
    console.log(data);
    xhr.send(data);
    */
}