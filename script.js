let amount = document.querySelector('.amount_value');
let country1 = document.querySelector('#country_1');
let country2 = document.querySelector('#country_2');
let element1 = document.querySelector('#final_button');
let answer = document.querySelector('#output_final');
let q = document.querySelectorAll('.Drop_down');
q.forEach(element=> {
    element.addEventListener('click',()=>{
        country1.dispatchEvent(new MouseEvent('mousedown'))
    })
})
console.log(amount);
async function collecting() {
    const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_5EIqlTGyOCEhl1OUhKI7lkOHhECpprl36CbGlsv9");
    const country_names = await response.json();
    const imp = Object.keys(country_names.data)
     imp.forEach(element => {
        country1.innerHTML += `<option value="${element}">${element}</option>`
        country2.innerHTML += `<option value="${element}">${element}</option>`
    });
  }
window.addEventListener('load',()=>{
    collecting();
})
async function conversion(){
    let c1= country1.value;
    let c2=country2.value;
    let a = amount.value;
    console.log(a);
    if(a==undefined || a==0){
        a=1;
        amount.value ='1';
    }
    console.log(a);
    const response = await fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_5EIqlTGyOCEhl1OUhKI7lkOHhECpprl36CbGlsv9`);
    current = await response.json();
    val1 = current.data[c1].value;
    val2=current.data[c2].value;
    console.log(val1);
    console.log(val2);
    if( val1 ==undefined || val2==undefined){
        answer.textContent=`Please Select Currency`;
    }
    else{
    answer.textContent=`${a} ${c1} =  ${a * val2 / val1} ${c2}`;
    }
}
element1.addEventListener('click',()=>{
    conversion();
})