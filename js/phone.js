
function updatePhoneNumber(isIncrease){
  const phoneNumberField=document.getElementById("phone-number-field")
  const phoneNumberString=phoneNumberField.value ;
  const previousPhoneNumber=parseInt(phoneNumberString);
  let newPhoneNumber;
  if(isIncrease===true){
     newPhoneNumber=previousPhoneNumber+1;
  }
  else{
    newPhoneNumber=previousPhoneNumber-1;

  }
  phoneNumberField.value=newPhoneNumber;
  return newPhoneNumber;
}


function updatePhoneTotalPrice(newPhoneNumber){
  const newPhoneTotalPrice =newPhoneNumber*1219;
  const phonefinalPrice=document.getElementById("phone-total-price")
  phonefinalPrice.innerText=newPhoneTotalPrice;
}




document.getElementById("btn-phone-plus").addEventListener("click", function(){

 const newPhoneNumber=updatePhoneNumber(true);
 updatePhoneTotalPrice(newPhoneNumber);

 currentSubTotal();
 
})

document.getElementById("btn-phone-minus").addEventListener("click", function(){
 const newPhoneNumber= updatePhoneNumber(false);
 updatePhoneTotalPrice(newPhoneNumber);
 currentSubTotal()
;
})