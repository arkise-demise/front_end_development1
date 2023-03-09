let saveEl =document.getElementById("save-el")
let countEl =document.getElementById("count-el")
let count = 0
console.log(saveEl)
function increment(){
    console.log("clicked")
    count+=1
    countEl.innerText = count
}
function save(){
    console.log(count)
    let countStr = count + "-"
    saveEl.innerText += countStr
    console.log(count)
    countEl.innerText = 0
   count = 0
}




