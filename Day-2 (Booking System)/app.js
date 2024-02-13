//===== Data ============

let selected = {
    seatNo : '',
    available : '',
    bookedBy :''
}

let seatDetails = {
    1 : {
        seatNo : 1,
        available : false,
        bookedBy : 'MS Dhoni'
    },
    2 : {
        seatNo : 2,
        available : false,
        bookedBy : 'Virat Kolhi'
    }
}

for(let i=3;i<=13;i++){
    seatDetails[i] = {
        seatNo : i,
        available : true,
        bookedBy : ''
    }
}

let submitBtnClicked = false
let btn = false
//====================================================================
function updatebtn(flag){
    submitBtnClicked = flag
    render()
}

function setSelected(seat){
    selected = seat
    render()
}

//====================================================================
function render(){

    const root = document.getElementById("root")

    //======= refresh the page =======================================
    root.innerHTML = ''

    const left = document.createElement("div")
    left.className="left"

//========= loop use for creating buttons ===============================
    for(let i=1;i<=13;i++){

        let button = document.createElement("button")
        button.className="btn"
        button.textContent= i

        if(selected.seatNo == button.innerText){
            button.style.backgroundColor = 'gray'
        }

        button.addEventListener('click',()=>{
            setSelected(seatDetails[i])
            btn = true
            updatebtn(false)
        })

        left.appendChild(button)
    }

    const submit = document.createElement("button")
    submit.className="btn1"
    submit.textContent= "SUBMIT"
    if(submitBtnClicked){
        submit.style.backgroundColor = 'rgb(50, 176, 202)'
    }
    submit.addEventListener('click',()=>{
        updatebtn(true)
    })

    left.appendChild(submit)


//============== right div =======================================

    const right = document.createElement("div")
    right.className="right"

    function details(){

        const lable = document.createElement('h1')
        lable.innerText = "Seat No. : "+selected.seatNo
        right.appendChild(lable)

        if(selected.available){
            const availability = document.createElement('h1')
            availability.innerText = "Available"
            right.appendChild(availability)
        }else{
            const bookedBy = document.createElement('h1')
            bookedBy.innerText = "Booked By :"+selected.bookedBy
            right.appendChild(bookedBy)
        }
    }

    function subBtnClicked(){
        const totSeat = document.createElement('h1')
        totSeat.textContent = 'total seats 10'
        const aveSeat = document.createElement('h1')
        aveSeat.textContent = 'available seat 9'

        right.appendChild(totSeat)
        right.appendChild(aveSeat)
    }
    if(btn){
        details()
    }

    if(submitBtnClicked){
        subBtnClicked()
    }

    const maindiv = document.createElement("div")
    maindiv.className="maindiv"

    maindiv.appendChild(left)
    maindiv.appendChild(right)

    const headline = document.createElement("div")
    headline.textContent = "Booking System"
    headline.className="headline"

    root.appendChild(headline)
    root.appendChild(maindiv)
}

