function addtion(){
  myTable.innerHTML = ""
  for(let i = 1; i <= myRow.value; i++){
    solutIon = "<tr>"
    for(let j = 1; j <= myCol.value; j++){
      solutIon += `<td> ${i}+${j}=${i+j} </td>`
    }
    solutIon += "</tr>"
    myTable.innerHTML += solutIon
    myTable.style.fontSize = "15px"
    myTable.style.fontWeight = "600"
  }
  
}
function subtraction(){
  myTable.innerHTML = ""
  for(let i = 1; i <= myRow.value; i++){
    solutIon = "<tr>"
    for(let j = 1; j <= myCol.value; j++){
      solutIon += `<td> ${i}-${j}=${i-j} </td>`
    }
    solutIon += "</tr>"
    myTable.innerHTML += solutIon
    myTable.style.fontSize = "15px"
    myTable.style.fontWeight = "600"
  }
  
}


function multiply(){
  myTable.innerHTML = ""
  for(let i = 1; i <= myRow.value; i++){
    solutIon = "<tr>"
    for(let j = 1; j <= myCol.value; j++){
      solutIon += `<td> ${i}x${j}=${i*j} </td>`
    }
    solutIon += "</tr>"
    myTable.innerHTML += solutIon
    myTable.style.fontSize = "15px"
    myTable.style.fontWeight = "600"
  }
  
}

function divide(){
  myTable.innerHTML = ""
  for(let i = 1; i <= myRow.value; i++){
    solutIon = "<tr>"
    for(let j = 1; j <= myCol.value; j++){
      solutIon += `<td> ${i}/${j}= parseFloat(${i/j}).tofixed(3) </td>`
    }
    solutIon += "</tr>"
    myTable.innerHTML += solutIon
    myTable.style.fontSize = "15px"
    myTable.style.fontWeight = "600"
  }
  
}

function cleAr(){
  myCol.value = ""
  myRow.value = ""
  myTable.innerHTML = ""
}
