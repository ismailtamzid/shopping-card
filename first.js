//phone section task
/*document.getElementById("phone-increase").addEventListener("click",function(){
   handlephoneChange(true);
})

document.getElementById("phone-decrease").addEventListener("click",function(){
   handlephoneChange(false);
})*/

/*
function handlephoneChange(isIncrease){
    var phoneInput= document.getElementById("phone-count");
   var phoneCount=parseInt(phoneInput.value);
  // var phoneNewCount=phoneCount-1;
  let phoneNewCount=phoneCount;
  if(isIncrease==true){
      phoneNewCount=phoneCount+1;
  }
  if(isIncrease==false && phoneCount > 0){
      phoneNewCount=phoneCount-1;
  }
       phoneInput.value=phoneNewCount;
   var phoneTotal=phoneNewCount*1259;
   document.getElementById("phone-total").innerHTML=phoneTotal;  
}
*/



//case section task
/*document.getElementById("case-increase").addEventListener("click",function(){
   handleproductChange(true);  
})

document.getElementById("case-decrease").addEventListener("click",function(){
    handleproductChange(false);
})*/

//increase case function
function handleproductChange(product, isIncrease){
    var productInput=document.getElementById(product+"-count");
    var productCount=parseInt(productInput.value);
   // var productNewCount=productCount+1;
   let productNewCount=productCount;
   if(isIncrease==true){
    productNewCount=productCount+1;
   }
   if(isIncrease==false && productCount > 0){
    productNewCount=productCount-1;
   }
   productInput.value=productNewCount;
    //var productTotal=productNewCount*59;
    let productTotal= 0;
    if(product == 'phone'){
        productTotal = productNewCount*1259;
    }
    if(product == 'case'){
        productTotal = productNewCount*59;
    }
    document.getElementById(product+"-total").innerHTML=productTotal;
}
//total section task
/*function calculateTotal(){
  var phoneInput=document.getElementById("phone-count");
  var phoneCount=parseInt(phoneInput.value);
  
  var caseInput=document.getElementById("case-count");
  var caseCount=parseInt(caseInput.value);

  var totalPrice= phoneCount*1219 +caseCount*59;
  document.getElementById("total-price").innerHTML=totalPrice;
}*/ 
document.querySelector("#phone-increase").addEventListener("click", function(){
    handlesubtotal(); // kal rate gumate gesilam ai idea er kotha mone porsilo dekhtesi tmi kore boshe acho
})
document.getElementById("phone-decrease").addEventListener("click",function(){
    handlesubtotal(); 
})
document.getElementById("case-increase").addEventListener("click",function(){
    handlesubtotal(); 
})
document.getElementById("case-decrease").addEventListener("click",function(){
  handlesubtotal();  
})
function handlesubtotal(){
    var phonePriceTotal = parseFloat(document.querySelector("#phone-total").innerHTML);
    var casingPriceTotal = parseFloat(document.querySelector("#case-total").innerHTML);
    var subTotalPrice = phonePriceTotal + casingPriceTotal;
    document.querySelector("#sub-total").innerHTML = subTotalPrice;

    var subTotal = parseFloat(document.querySelector("#sub-total").innerHTML);
    document.querySelector("#total").innerHTML = subTotal;
}

