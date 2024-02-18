let Time = {
    hr : "00",
    mins : "00",
    secs : "00",
    am_pm : "AM",
    day : "",
    date : "",
    month : "",
    year : ""
}

function updateTime(){
    let date = new Date()
    Time.hr = date.getHours()
    Time.mins = date.getMinutes()
    Time.secs = date.getSeconds()
    Time.am_pm = Time.hr > 12 ? "PM" : "AM"
    let day = date.getDay()

    if(day==0)
        Time.day = "Sunday"
    else if(day==1)
        Time.day = "Monday"
    else if(day==2)
        Time.day = "Tuesday"
    else if(day==3)
        Time.day = "Wednesday"
    else if(day==4)
        Time.day = "Thursday"
    else if(day==5)
        Time.day = "Friday"
    else if(day==6)
        Time.day = "Saturday"

    Time.date = date.getDate()
    let month = date.getMonth()

    if(month==0)
        Time.month = "January"
    else if(month==1)
        Time.month = "February"
    else if(month==2)
        Time.month = "March"
    else if(month==3)
        Time.month = "April"
    else if(month==4)
        Time.month = "May"
    else if(month==5)
        Time.month = "June"
    else if(month==6)
        Time.month = "July"
    else if(month==6)
        Time.month = "August"
    else if(month==6)
        Time.month = "September"
    else if(month==6)
        Time.month = "October"
    else if(month==6)
        Time.month = "November"
    else if(month==6)
        Time.month = "December"

    Time.year = date.getFullYear()

    render()
}

function render() {

    let root = document.getElementById("root")
    root.innerHTML= ""
    
    setInterval(updateTime,1000)

    let displayTime = document.createElement("h1")
    displayTime.style.fontSize = "50px"
    displayTime.textContent = Time.hr + " : " + Time.mins + " : " + Time.secs + "   " + Time.am_pm 

    let displayDay = document.createElement("h1")
    displayDay.style.fontSize = "20px"
    displayDay.textContent = Time.day 

    let displayDate = document.createElement("h1")
    displayDate.style.fontSize = "20px"
    displayDate.textContent = Time.month + "   " + Time.date + "  " + Time.year

    root.appendChild(displayDay)
    root.appendChild(displayTime)
    root.appendChild(displayDate)
}

