//object of Restuarant Details

let restuarantDetails = {
    name : 'DevDine',
    owner : 'Snehal Dhindle',
    location : 'Pune',
    cuisine : 'South Indian & Chinese',
    ratings : 5,
    openingHours : {
        weekdays : "10:00 AM - 10:000 PM",
        weekends : "10:00 AM - 10:00 PM"
    },
    contact : {
        phone : 7066798939,
        emailId : 'devdine@gmail.com'
    },

    //menu : menuCard
}

console.log(restuarantDetails)

//object of menu card

let menuCard = {

    SouthIndian : {

        Dosa : [
            {type : 'Plain Dosa', price : 40},
            {type : 'Masala Dosa', price : 50},
            {type : 'Mysore Plain Dosa', price : 70},
            {type : 'Sponge Dosa', price : 60}
        ],

        Uttapams : [
            {type : 'Plain Uttapam', price : 40},
            {type : 'Onion Uttapam', price : 50},
            {type : 'Onion-Tomato Uttapam', price : 60},
            {type : 'Mix Vegetable Uttapam', price : 70}
        ],

        Vada : [
            {type : 'Plain Vada', price : 30},
            {type : 'Vada Sambar', price : 50},
            {type : 'Dahi Vada', price : 50}
        ],

        Idli : [
            {type : 'Idli Sambar&Chatni', price : 40},
            {type : 'Fried Idli ', price : 50}
        ]

    },

    Chinese : {

        Soup : [
            {type : 'Tomato Soup', price : 80},
            {type : 'Sweet Corn Soup', price : 90},
            {type : 'Manchaw Soup', price : 100}
        ],

        Rice : [
            {type :  'Veg Fried Rice', price : 140},
            {type : 'Veg Schzwan Rice', price : 150},
            {type : 'Veg Triple Rice', price : 170}
        ],

        Noodles : [
            {type :  'Veg Hakka Noodles', price : 140},
            {type : 'Veg Schzwan Noodles', price : 150},
            {type : 'Veg Triple Noodles', price : 170},
            {type : 'Veg Garlic Noodles', price : 160}
        ]
  
    }

}

//object of staff

let staff = {
    chef : [],
    waiters : [],
    cleaners : [],
    guards : []
}

function addStaff(empId,name,role,phoneNum){
    employee[role].push({empId,name,role,phoneNum})
}


addStaff(1,'snehal','chef',78789098098)
console.log(staff)

// object of Tables Chart

let numberOfTables = {
    totalTables : 20,
    occupiedTables : 8,
    availableTables : 12

}

// object of TableBooking

let tableBooking = []

function bookTable(customerName,contact,numberOfPeople,reservationTime){
    let book = {
        customerName : customerName,
        contact : contact,
        numberOfPeople : numberOfPeople ,
        reservationTime : reservationTime
    }

    tableBooking.push(book)
}


// object of orders

let orders = [];

function placeOrder(tableNumber,customerName,items,){
    let order = {
        tableNumber : tableNumber,
        customerName : customerName,
        items : items,
    }
    orders.push(order);
}

placeOrder(2,'Shreyanshi',['Veg Hakka Noodles','Veg Triple Rice'])

console.log(orders)

//object of Online Ordes

let onlineOrders = []

function placeOnlineOrder(customerName,contact,address,items,){
    let order = {
        customerName : customerName,
        contact : contact,
        address : address,
        items : items,
    }
    orders.push(order);
}




