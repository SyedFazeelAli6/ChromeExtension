// function saveLead(){
//     console.log("Button clicked from html attribute")
// }


let myLeads = []
const inputEl = document.getElementById("input-el")  
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
// console.log(leadsFromLocalStorage) 


let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if(leadsFromLocalStorage)  {
    
   myLeads = leadsFromLocalStorage
   render(myLeads)
}

  
// const tab = [
//     {url: "https://no.linkedin.com/in/per-harald-borgen"}
// ]

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})
})

function render(leads){
    let listItems = "";
    
    for(let i = 0; i < leads.length; i++){
    
        // refractor the code below to use template strings
        listItems += `
        <li>
           <a target='_blank' href='${leads[i]}'>
                 ${leads[i]}
           </a>
        </li>`
    }
    
    ulEl.innerHTML = listItems;
    
     }
 
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
}) 


inputBtn.addEventListener("click", function() {
   
      myLeads.push(inputEl.value);
      inputEl.value = "";
     //save the myLeads array to localstorage 
     //PS: remember JSON.stringify()
  
     localStorage.setItem("myLeads", JSON.stringify(myLeads));
     render(myLeads)
    
  
})


function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++ ){
           if (i === lastIndex) {
             baseString += arr[i]
           } else {
               baseString += arr[i] + ", "
           }
        }
           return baseString
    }


const sentence = generateSentence("highest mountain", ["Mount Everest", "K2"])
console.log(sentence)

// let data = [
//     {
//         player: "Jane",
//         score: 52
//     },
//     {
//         player: "Mark",
//         score: 41
//     }
// ]

// btnJ = document.getElementById("btn-j")

// btnJ.addEventListener("click", myFunction);

// function myFunction() {
//     console.log(data[0].score)
// }

// let faz = localStorage.getItem("lastname")
// console.log(faz)



//PRACTICE//

// let myCourse = ["Learn CSS", "UI design", "Intro clean code"]


// function logItems(arr){
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// logItems(myCourse)










// let buttonId = document.getElementById("button-el")

// buttonId.addEventListener("click", function() {
//              console.log("I want to open the box!")
// }
// )


// const container = document.getElementById("container");
// container.innerHTML = "<button onclick='buy()'>Buy!</button>";

// function buy(){

//     container.innerHTML += "<p>Thank you for buying!</p>";
// }

// template string.literals

// refractor meail string to use tmplate strings

// const email = "Hey " + recipient + "! How is it going? Cheers Per"


// const recipient = "James";

// const sender = "Fazeel";


// const email = `
//   Hey ${recipient} ! How is it going? Cheers ${sender}
// `

// console.log(email);


//PRACTICE JSON STRINIGFY AND PARSE


// let myLeads = `["www.awesomelead.com"]`
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.example.com")
// console.log(myLeads);
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)


// PRACTICE localStorage


//  localStorage.getItem("myLeads", "www.zain.com")

// localStorage.getItem("myLeads")
// console.log(localStorage)
// localStorage.clear()
