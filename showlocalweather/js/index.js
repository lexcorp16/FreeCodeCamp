$(document).ready(function(){
  var long;
  var lat;
  $.getJSON("http://ip-api.com/json", function(data1){
    long = data1.lon;
    lat = data1.lat;
    var city = data1.regionName;
    
    console.log(long);
    console.log(city);
    
      var apiCall = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=4c78e3460c3ae1baf6c9b67990be0803';
  
  
  $.getJSON(apiCall, function(data){
    var weatherType = data.weather[0].description;
    var iconCode = data.weather[0].icon;
    var city = data.name;
    var country = data.sys.country;
    var tempK = data.main.temp;
    var tempC = (tempK - 273).toFixed(1);
    var degC 
    
    var tempF = ((tempK * 9/5) - 459.67).toFixed(1);
    
    $("#city").text(city +", "+ country);
    $("#weather").text(weatherType);
    $("#temp").html(tempC + ' °C');
    
    $("#toggle").click(function(){
      if ($('#temp').text().indexOf('F') > -1) {
    $('#temp').text(tempC + '° C');
  } else {
    $('#temp').text(tempF + '°F');
  }
      this.blur();
        
    });
    $(".icon").html("<img class = 'text-center' src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  });
    
    
  });
  
});