const oneSecond = () => 1000
const getCurrentTime = () => new Date()
const clear = () => console.clear()
const log = message => console.log(message)


const serializeClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
})

const civilianHours = clockTime => ({
    ...clockTime,
    hour: (clockTime.hour > 12) ? clockTime.hour - 12 : clockTime.hour
})

const appendAMPM = clockTime => ({
    ...clockTime,
    ampm:(clockTime.hour >= 12) ? "PM" : "AM"
})

const display = target => time => target(time)

const formatClock = format => time =>{
    format.replace("hh", time.hour)
        .replace('mm', time.minutes)
        .replace("ss", time.seconds)
        .replace('tt', time.ampm)
}

const prependZero = key => clockTime =>({
    ...clockTime.hour,
    [key]: (clockTime[key] < 10) ?
        "0" + clockTime[key] : clockTime[key]
})

const convertToCivilianTime = clockTime => compose(appendAMPM, civilianHours)(clockTime)

function compose(prependZero1, prependZero12, prependZero13) {

}

const doubleDigits = civilianTime =>{
    compose(prependZero("hour"),
    prependZero("minutes"),
        prependZero("seconds"))(civilianTime)
}


const startTicking = () =>{
    setInterval(compose(
        clear,
        getCurrentTime,
        serializeClockTime,
        convertToCivilianTime,
        doubleDigits,
        formatClock("hh:mm:ss tt"),
        display(log)
    ), oneSecond())
}
startTicking()