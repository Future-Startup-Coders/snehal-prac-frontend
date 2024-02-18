let data = []

function render(){

    let root = document.getElementById("root")
    root.innerHTML=""

    let inputEle = document.createElement("input")
    inputEle.className = "input"
    inputEle.type='text'
    inputEle.placeholder='Enter your task'

    let submit = document.createElement("button")
    submit.className="btn"
    submit.textContent= "SUBMIT"
    submit.addEventListener('click',()=>{
        data.push(inputEle.value)
        render()
    })

    let table = document.createElement("div")
    table.className="table"

    for(let i=0;i<data.length;i++){
        let row=document.createElement("div")
        row.style.display="flex"
        row.style.gap="10px"

        let sr = document.createElement("div")
        sr.textContent=i+1 
        let task= document.createElement("div")
        task.textContent=data[i]

        row.appendChild(sr)
        row.appendChild(task)
        table.appendChild(row)
    }

    let info =document.createElement("div")
    info.className="info"

    info.appendChild(inputEle)
    info.appendChild(submit)

    root.appendChild(info)
    root.appendChild(table)
}






// let table = document.createElement("table")
    // table.border = 1

    // let headerRow = document.createElement("th")

    // let headerCell1 = document.createElement("th")
    // headerCell1.textContent = "Sr No."

    // let headerCell2 = document.createElement("th")
    // headerCell2.textContent = "Task Name"

    // let headerCell3 = document.createElement("th")
    // headerCell3.textContent = "Time"

    // for(let i=1;i<=10;i++){
    //     let dataRow = document.createElement(th)


    // }

    // headerRow.appendChild(headerCell1)
    // headerRow.appendChild(headerCell2)
    // headerRow.appendChild(headerCell3)
    // table.appendChild(headerRow)

    // function addTask(){
        
    // }