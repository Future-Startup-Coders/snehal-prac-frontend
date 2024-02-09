
let menuCard = {

    SouthIndian : {

        Dosa : {
            1 : {
                type : 'Plain Dosa',
                price : 40
            },
            2 : {
                type : 'Masala Dosa',
                price : 50
            },
            3 : {
                type : 'Mysore Plain Dosa',
                price : 70
            },
            4 : {
                type : 'Sponge Dosa',
                price : 60
            }
            
        },

        Uttapams : {
            1 : {
                type : 'Plain Uttapam',
                price : 40
            },
            2 : {
                type : 'Onion Uttapam',
                price : 50
            },
            3 : {
                type : 'Onion-Tomato Uttapam',
                price : 60
            },
            4 : {
                type : 'Mix Vegetable Uttapam',
                price : 70
            }
        },

        Vada : {
            1 : {
                type : 'Plain Vada',
                price : 30
            },
            2 : {
                type : 'Vada Sambar',
                price : 50
            },
            3 : {
                type : 'Dahi Vada',
                price : 50
            }
        },

        Idli : {
            1 : {
                type : 'Idli Sambar&Chatni',
                price : 40
            },
            2 : {
                type : 'Fried Idli ',
                price : 50
            }
        }

    },

    Chinese : {

        Soup : {
            1 : {
                type : 'Tomato Soup',
                price : 80
            },
            2 : {
                type : 'Sweet Corn Soup',
                price : 90
            },
            3 : {
                type : 'Manchaw Soup',
                price : 100
            }
        },

        Rice : {
            1 : {
                type :  'Veg Fried Rice',
                price : 140
            },
            2 : {
                type : 'Veg Schzwan Rice',
                price : 150
            },
            3 : {
                type : 'Veg Triple Rice',
                price : 170
            }
        },

        // Rice : [
            
        //         {type :  'Veg Fried Rice',price : 140},
        //         {type : 'Veg Schzwan Rice',price : 150},
                     
        // ],

        Noodles : {
            1 : {
                type :  'Veg Hakka Noodles',
                price : 140
            },
            2 : {
                type : 'Veg Schzwan Noodles',
                price : 150
            },
            3 : {
                type : 'Veg Triple Noodles',
                price : 170
            },
            4 : {
                type : 'Veg Garlic Noodles',
                price : 160
                
            }
        }
  
    }

}

let restuarant = {
    menuCard                   //internally key value pair
}

function addMenu(typeOfFood,category,type,price){

    //console.log(typeof menuCard[typeOfFood][category])
    menuCard[typeOfFood][category].push({type , price}) 
} 
//addMenu('SouthIndian','Dosa','Cut Dosa',80)
//addMenu('Chinese','Rice','Jain Noodles',180)

//console.log( menuCard.Chinese.Rice)


function availableTypes(typeOfFood,category){

    for(item in menuCard[typeOfFood]){
        if(item == category){
            console.log(menuCard[typeOfFood][item])
        }
    }
}

//availableTypes('SouthIndian','Idli')


function updates(type,updates){
    for(a in menuCard){
        for(b in menuCard[a]){
            for(c in menuCard[a][b]){
                for(d in menuCard[a][b][c]){
                    if(menuCard[a][b][c][d] == type){
                        console.log(menuCard[a][b][c][d])
                        //menuCard[a][b][c] = {...menuCard[a][b][c] , ...updates}
                    }
                } 
            }      
        }
    }
}

//updates('Veg Fried Rice',{price : 200 , type : 'Supreme Veg Fried'})

//console.log(menuCard.Chinese.Rice)

function deleteItem(type){
    for(a in menuCard){
        for(b in menuCard[a]){
            for(c in menuCard[a][b]){
                for(d in menuCard[a][b][c]){
                    if(menuCard[a][b][c][d] === type){
                        console.log(menuCard[a][b][c][d])
                        delete menuCard[a][b][c]
                        break
                        //menuCard[a][b][c] = {...menuCard[a][b][c] , ...updates}
                    }
                } 
            }      
        }
    }

}

deleteItem('Veg Garlic Noodles')
console.log(menuCard.Chinese.Noodles)

//console.log(menuCard.Chinese.Soup)

//console.log(restuarant.SouthIndian.Dosa)
//Restuarant details
//1)menuCard
//2)orders
//3)billing
//4)tax calculation in percentage (includes Service Charges)
//5)no. of Workers
//6)no. of tables


//7)online booking  (feature)


//console.log(menuCard.SouthIndian)
//console.log(menuCard.Chinese)

// for(key in menuCard.SouthIndian.Dosa){
//      for(key2 in menuCard.SouthIndian.Dosa[key]){
//      console.log(menuCard.SouthIndian.Dosa[key][key2])   
//      }
//  }

//  for(key in menuCard.Chinese.Noodles){
//     for(key2 in menuCard.Chinese.Noodles[key]){
//     console.log(menuCard.Chinese.Noodles[key][key2])   
//     }
// }
// let x = []
// console.log(typeof x)