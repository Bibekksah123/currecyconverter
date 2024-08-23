const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let optionsect=document.querySelectorAll('.dropdown select');
let btn=document.querySelector('form button');
let froncurr=document.querySelector(".from select");
let tocurr=document.querySelector(".to select");
optionsect.forEach(select=>{
for( let code in countryList ){
  let newoption=document.createElement('option');
  newoption.innerText=code;
newoption.value=code;
if(select.name=="from" && code=="USD"){
  newoption.selected="selected"
}else if(select.name=="to" && code=="NPR"){
  newoption.selected="selected"
  
}
  select.appendChild(newoption); 
}
select.addEventListener("change",(e)=>{
  updateimg(e.target);
});
});
 function updateimg(ele){
  let conco=ele.value;
  let countrycode=countryList[conco];
  let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
  let img=ele.parentElement.querySelector('img');
  img.src=newsrc;
 }
 btn.addEventListener("click", async(e)=>{
  let amount=document.querySelector('.amount input');
  e.preventDefault();
  let amt=amount.value;
  if(amt==='' || amt<=1){
    amt=1;
    amount.value="1";
  }
  const URL = `${BASE_URL}/${froncurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
  let res=await fetch(URL)
  let data=await res.json()
  console.log(data);


 })




