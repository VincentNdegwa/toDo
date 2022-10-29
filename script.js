let inputEl = document.getElementById("input-el")
let addBtn= document.getElementById("addBtn-el")
let listEl = document.getElementById("list-el")

let ButtonEl = document.querySelectorAll(".done-btn")



// addBtn.addEventListener("click" , function(){
//     listEl.innerHTML += '<li>' +inputEl.value+ "   " + '<button onclick="Done()" id="done-btn" >Done</button> </li>'
//     inputEl.value = " "
// }) 

// function Done(){
//     for(i=0; i<ButtonEl.length; i++){
//         ButtonEl[i].addEventListener('click', function(){
            
//         })
//     }
// }

let listText = inputEl.value

item = [ ]
// listButton=[ ]

addBtn.addEventListener("click" , function(){
    item.push(inputEl.value)
    // listButton.push(ButtonEl)
    let listText = " "
    for( i=0 ; i<item.length; i++){

        // listEl.innerHTML += item[i] + "<br>"
        listText += `

        <li>  ${item[i]} <button class="done-btn" >Done</button> </li> 

        `
        inputEl.value= " "
        console.log(listText)
    }
    listEl.innerHTML = listText


    // for( a=0;a<ButtonEl.length;a++){
    //     ButtonEl.addEventListener('click', function(){
    //         item.pop()
            
    //     })
    // }

}) 


