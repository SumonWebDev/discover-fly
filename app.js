//select
const firstPlusBtn=document.querySelector('#plus-first-class');
const firstMinusBtn=document.querySelector('#minus-first-class')
const firstInput=document.querySelector('#input-first-class');
const economyPlus=document.querySelector('#plus-economy-class');
const economyMinus=document.querySelector('#minus-economy-class');
const economyInput=document.querySelector('#input-economy-class');

//addEventListener for plus btn
firstPlusBtn.addEventListener('click',function(){
    const firstInput=document.querySelector('#input-first-class').value;
    const firstInputNumber=parseInt(firstInput);
    const newInput=firstInputNumber+1;
    document.querySelector('#input-first-class').value=newInput;
    total();
    
})

//addEventListener for minus btn
firstMinusBtn.addEventListener('click',function(){
    const firstInput=document.querySelector('#input-first-class').value;
    const firstInputNumber=parseInt(firstInput);
    const newInput=firstInputNumber-1;
    document.querySelector('#input-first-class').value=newInput;
    if(newInput<1){
        document.querySelector('#input-first-class').value=0;
    }
    total();
})
//economy class plus addEventListener  
economyPlus.addEventListener('click',function(){
    const economyInput=document.querySelector('#input-economy-class').value;
    const economyInputNumber=parseInt(economyInput);
    const newEconomyInput=economyInputNumber+1;
    document.querySelector('#input-economy-class').value=newEconomyInput;
    total();
})
//economy class plus addEventListener
economyMinus.addEventListener('click',function(){
    const economyInput=document.querySelector('#input-economy-class').value;
    const economyInputNumber=parseInt(economyInput);
    const newEconomyInput=economyInputNumber-1;
    document.querySelector('#input-economy-class').value=newEconomyInput;
    if(newEconomyInput<1){
        document.querySelector('#input-economy-class').value=0;
    }
    total();
})
//

function total(newInput,newEconomyInput){
    //subSum1
    const firstInput=document.querySelector('#input-first-class').value;
    const firstInputNumber=parseInt(firstInput);
    const subSum1=firstInputNumber*150;
    //subSum2
    const economyInput=document.querySelector('#input-economy-class').value;
    const economyInputNumber=parseInt(economyInput);
    const subSum2=economyInputNumber*100;
    //subSum
    const subSum=subSum1+subSum2;
    document.querySelector('#subtotal').innerText=subSum;
    //tax
    const tax=((subSum1+subSum2)*10)/100;
    document.querySelector('#tax').innerText=tax;
    //total
    const total=subSum+tax;
    document.querySelector('#total').innerText=total;
}
//btn-style
const btn=document.querySelector('.btn-style');
btn.addEventListener('click',function(){
    const hidden=document.querySelector('#hidden');
    hidden.style.display='none';
    document.querySelector('#success').style.display='block';
    document.body.style.background='none';
    
})
