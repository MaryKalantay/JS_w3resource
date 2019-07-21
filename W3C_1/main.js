function date() {
    var date = new Date();
    var day = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Trusday", "Friday", "Saturday" ];
    var hours = (date.getHours() < 12) ? " AM " : " PM ";
    var currDay = date.getDay() ;
    return console.log("Today is: " + day[currDay] + "\nCurrent time is: " + date.getHours() + hours +  ": "  + date.getMinutes() + ": "  +  date.getSeconds() );
}

console.log(date());






