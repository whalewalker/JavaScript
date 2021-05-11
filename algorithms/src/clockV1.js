// Imperative solution for clock
setInterval(logClockTime, 1000);

function getClockTime() {
    // Get Current time
    let date = new Date();
    let time = "";

//    Serialize clock time
    time = {
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        amPm: "AM"
    }

    // convert to civilian time
    if(time.hour === 12){
        time.amPm = "PM";
    }else if (time.hour > 12){
        time.amPm = "PM";
        time.hour -= 12;
    }

//    Prepend a 0 on the hours to make double digits
    if (time.hour < 10){
        time.hour = "0" + time.hour;
    }

    //    Prepend a 0 on the hours to make double digits
    if (time.minutes < 10){
        time.minutes = "0" + time.minutes;
    }

    //    Prepend a 0 on the hours to make double digits
    if (time.seconds < 10){
        time.seconds = "0" + time.seconds;
    }

    //Format the clock time as a string hh:mm:ss tt
    return `${time.hour} : ${time.minutes} : ${time.seconds} : ${time.amPm}`
}

function logClockTime(){
//    Get time string as civilian time
    let time = getClockTime();
//    clear the console and log the time
    console.clear()
    console.log(time)
}