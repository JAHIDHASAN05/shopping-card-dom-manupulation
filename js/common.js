function getTextElementValueById(elementId){
    const phonefinalPrice=document.getElementById(elementId)
    const currentPhoneTotalString=phonefinalPrice.innerText;
    const currentPhoneTotal=parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
  
  }
  

function setTextElementById(elementId , value){
    const subTotal= document.getElementById(elementId)
    subTotal.innerText=value; 

}

  function currentSubTotal(){
    
   const currentPhoneTotal=getTextElementValueById("phone-total-price");
   const currentCaseTotal= getTextElementValueById("case-total-price");
   const currentSubTotal= currentCaseTotal+currentPhoneTotal;
   setTextElementById("sub-total", currentSubTotal )
   

    const taxAmountString= (currentSubTotal*0.1).toFixed(2);
    const taxAmount= parseFloat(taxAmountString)

    setTextElementById("tax-amount", taxAmount)

    const finalAmount = taxAmount+currentSubTotal;
    setTextElementById("final-total", finalAmount)
  }
  