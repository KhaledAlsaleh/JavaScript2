// Your code goes in here

//document.querySelector("#app").innerText = "Tip Calculator";

let bill = document.getElementById('bill');
let service = document.getElementById('service');
let numberPeople = document.getElementById('peopleNum');
let calculate = document.getElementById('calculate');
let tipAmount = document.getElementById('tipAmount');

function emptyFileds (){
        alert('You need to fill in all the fields!');
}

function onePersonShareTheBill(){
    let resultForOnePerson = ((parseFloat(bill.value) * parseInt(service.value))/ 100).toFixed(2);
    tipAmount.textContent = `$ ${resultForOnePerson}`;
}

function calculateTheBill(){
    let percentagAmount = ( parseFloat(bill.value) * parseInt(service.value) ) / 100; 
    let resultForAll = (( percentagAmount ) / parseInt(numberPeople.value)).toFixed(2) ; 
    tipAmount.textContent = `$ ${resultForAll} each!`;
}

calculate.addEventListener('click',function(){
    if(bill.value == '' || service.value == '' || numberPeople.value == ''){
        emptyFileds();
    } else if(numberPeople.value == 1){
        onePersonShareTheBill();
    } else {
        calculateTheBill();
    }
});