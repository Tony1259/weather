/// MAIN WEATHER****************************/

let weather = {
    apiKey: "23ff4ec533d9b98667ea0df2a821d6ca",
    fetchWeather:function(searchCity){
        fetch('https://api.openweathermap.org/data/2.5/forecast?q=' 
        + searchCity 
        + ',&units=metric&appid=' 
        +this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));

        document.querySelector(".fahren").addEventListener("click",function(searchCity){
            fetch('https://api.openweathermap.org/data/2.5/forecast?q=' 
            + searchCity 
            +this.apiKey
            ) 
        })
    },
    fahrenDisplay: function(searchCity){
            fetch('https://api.openweathermap.org/data/2.5/forecast?q=' 
            + searchCity 
            +this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
            
    },

    
    
    displayWeather: function(data){
        const { name } = data.city;
        const { description } = data.list[0].weather[0];
        const { temp, humidity } = data.list[0].main;
        const { speed } = data.list[0].wind;
        const { visibility } = data.list[0];
        const { pressure} = data.list[0].main;
        const { icon } = data.list[0].weather[0];
        


        console.log(name, pressure, description, temp, humidity, speed, visibility, icon);
       
       
        document.querySelector("#city").innerText = "Weather in " + name;
        document.querySelector("#status").innerText = description;
        document.querySelector("#mainTemp").innerText = Math.round(temp);
        document.querySelector(".humidity").innerText = humidity + "%";
        document.querySelector(".windStatus").innerText = speed + "km/h";
        document.querySelector(".visibility").innerText = visibility + "m";
        document.querySelector(".airPressure").innerText = pressure + "mb";
        document.querySelector(".yellowBar").style.width = humidity + "%";
       

     
    {
        
       const {temp_max} = data.list[1].main;
       const {temp_min} = data.list[1].main;
        document.querySelector(".maxTemp1").innerText = Math.round(temp_max) + '°C';
        document.querySelector(".minTemp1").innerText = Math.round(temp_min) + '°C';
    }

   {     
        const {temp_max} = data.list[2].main;
        const {temp_min} = data.list[2].main;
       
        document.querySelector(".maxTemp2").innerText = Math.round(temp_max) + '°C';
        document.querySelector(".minTemp2").innerText = Math.round(temp_min) + '°C';
    }
        
    {
        const {temp_max} = data.list[3].main;
        const {temp_min} = data.list[3].main;
       document.querySelector(".maxTemp3").innerText = Math.round(temp_max) + '°C';
       document.querySelector(".minTemp3").innerText = Math.round(temp_min) + '°C';
    }
        

    { const {temp_max} = data.list[4].main;
        const {temp_min} = data.list[4].main;
        document.querySelector(".maxTemp4").innerText = Math.round(temp_max) + '°C';
        document.querySelector(".minTemp4").innerText = Math.round(temp_min) + '°C';
    }

    {   const {temp_max} = data.list[5].main;
        const {temp_min} = data.list[5].main;
        document.querySelector(".maxTemp5").innerText = Math.round(temp_max) + '°C';
        document.querySelector(".minTemp5").innerText = Math.round(temp_min) + '°C';
    }

        //NEXT 5 DAYS end
        
    },
       
       displayImage:function(data){
     
    },

    search:function(){
        this.fetchWeather(document.querySelector(".search").value);
    }
};
document.querySelector(".search").addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        weather.search();
    }
})
document.querySelector(".btn1").addEventListener("click", function(){
    weather.search();
});




        
///// the date of today////
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const m = new Date();

let month = months[m.getMonth()];
let date = m.getDate();
let weekDays = days[m.getDay()];

document.querySelector("#todaysDate").innerText = "Today - " + weekDays + ", " + date + " " + month;
///////---------- Two days from today--------------------
let twoDaysFromNow = new Date(m);
twoDaysFromNow.setDate(twoDaysFromNow.getDate() + 2);

month = months[twoDaysFromNow.getMonth()];
date = twoDaysFromNow.getDate();
weekDays = days[twoDaysFromNow.getDay()];

document.querySelector(".twoMoreDays").innerText = weekDays + ", " + date + " " + month;

///////---------- Three days from today--------------------
let threeDaysFromNow = new Date(m);
threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);

month = months[threeDaysFromNow.getMonth()];
date = threeDaysFromNow.getDate();
weekDays = days[threeDaysFromNow.getDay()];

document.querySelector(".threeMoreDays").innerText = weekDays + ", " + date + " " + month;


///////---------- Four days from today--------------------
let fourDaysFromNow = new Date(m);
fourDaysFromNow.setDate(fourDaysFromNow.getDate() + 4);

month = months[fourDaysFromNow.getMonth()];
date = fourDaysFromNow.getDate();
weekDays = days[fourDaysFromNow.getDay()];

document.querySelector(".fourMoreDays").innerText = weekDays + ", " + date + " " + month;


///////---------- five days from today--------------------
let fiveDaysFromNow = new Date(m);
fiveDaysFromNow.setDate(fiveDaysFromNow.getDate() + 5);

month = months[fiveDaysFromNow.getMonth()];
date = fiveDaysFromNow.getDate();
weekDays = days[fiveDaysFromNow.getDay()];

document.querySelector(".fiveMoreDays").innerText = weekDays + ", " + date + " " + month;
///// the date of today////





    



