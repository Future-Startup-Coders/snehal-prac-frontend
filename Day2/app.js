function render(){
    const root = document.getElementById('root')
    root.innerHTML = ''

    const left = document.createElement('div')
    left.className = 'left'

    for (let i=1 ; i<=16 ; i++){
        const button = document.createElement('button')
        button.className = 'btn'
        button.textContent = i

        button.addEventListener('click',()=>{
         
        })

        left.appendChild(button)
    }


    const label = document.createElement('h1')
    label.textContent = 'Seat no : '
    const bookedBy = document.createElement('h1')
    bookedBy.textContent = 'Booked by : '

    const right = document.createElement('div')
    right.className = 'right'
    right.appendChild(label)
    right.appendChild(bookedBy)

    const maindiv = document.createElement('div')
    maindiv.className = 'maindiv'
    maindiv.appendChild(left)
    maindiv.appendChild(right)

    const headline = document.createElement('h1')
    headline.textContent = 'Booking System'

    root.appendChild(headline)
    root.appendChild(maindiv)
}