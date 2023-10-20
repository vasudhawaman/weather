let btn = document.getElementById("btn");
btn.addEventListener("click",() =>{
    let city = document.getElementById("city").value;
    console.log(city);
let url1 = "http://api.openweathermap.org/geo/1.0/direct?q=";
let url2 ="&appid=";
let key ="4a7ab364f302f1d911d3c4305c07b98e";
let url = url1 + city + url2 + key;
console.log(url);
fetch(url).then(function(response){
   //console.log(response);
    return response.json();
}).then(function(place){
    getlatlong(place);
});

let getlatlong = function(place){

   let lat = place[0]["lat"]; // works bea
   let longitude = place[0]["lon"];
let url3 ="https://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon="+ longitude +"&appid=" + key;
console.log(url3);
fetch(url3).then(function(response){
    //console.log(response);
    return response.json();
}).then(function(weather){
    displayweather(weather);
});
}
let displayweather = function(weather){
    console.log(weather);
    let temp = Math.ceil(weather.main.temp -273);
    
    let hum = weather["main"]["humidity"];
    let pressure = Math.ceil( weather.main.pressure -273);
    let tempmin =Math.ceil( weather.main.temp_min -273);
    let tempmax =Math.ceil( weather.main.temp_max -273);

    document.getElementById("item-1").innerHTML += temp +"&deg";
document.getElementById("item-2").innerHTML += hum +"%";
document.getElementById("item-3").innerHTML +=  pressure;
document.getElementById("item-4").innerHTML +=  tempmin +"&deg";
document.getElementById("item-5").innerHTML +=  tempmax +"&deg";
document.getElementById("temp").innerHTML = temp +"&deg";
document.getElementById("placename").innerHTML += city;


    
}


})




//const nameofcity = document.getElementById("city").value;

