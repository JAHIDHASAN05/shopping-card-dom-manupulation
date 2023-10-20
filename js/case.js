function caseNumberField(isIncrease){
    const caseNumberField=document.getElementById("case-number-field")
    const caseNumberString=caseNumberField.value ;
    const caseNumber= parseFloat(caseNumberString);

    let newCaseNumber;

    if(isIncrease===true){
         newCaseNumber=caseNumber+1;
    }
    else{
         newCaseNumber=caseNumber-1;
    }

    
    caseNumberField.value=newCaseNumber;

    return newCaseNumber;
}


function updateCaseTotalPrice(newCaseNumber){
    const newCasePrice=newCaseNumber*59;
    const caseTotalPrice=document.getElementById("case-total-price")
    caseTotalPrice.innerText=newCasePrice;
}








document.getElementById("btn-case-plus").addEventListener("click", function(){
    const  newCaseNumber= caseNumberField(true);

    updateCaseTotalPrice(newCaseNumber)
     
})

document.getElementById("btn-case-minus").addEventListener("click",function(){
    const  newCaseNumber= caseNumberField(false);
    updateCaseTotalPrice(newCaseNumber)
    
})