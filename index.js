let months = [
    "Janurary",
    "februray", 
    "March",
    "April", 
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomMonth(){
    const min = 0
    const max = months.length

    document.getElementById("month").innerHTML = months[getRandom(min, max)]
}

function getRandomDay(){
    const min = 1
    const max = 31

    document.getElementById("day").innerHTML = + getRandom(min, max)
}

function getRandomYear(){
    const min = 1000
    const max = 4000

    document.getElementById("year").innerHTML = + getRandom(min, max)
}

// Numbers!

function getRandomMonthNumber(){
    const min = 1
    const max = 12

    document.getElementById("monthN").innerHTML = getRandom(min, max)
}

function getRandomDayNumber(){
    const min = 1
    const max = 31

    document.getElementById("dayN").innerHTML = + getRandom(min, max)
}

function getRandomYearNumber(){
    const min = 1000
    const max = 4000

    document.getElementById("yearN").innerHTML = + getRandom(min, max)
}