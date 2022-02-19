const canditate=document.querySelector('div.canditateregistartion');  
document.getElementById("checkboxid").addEventListener("click",()=>{
canditate.classList.toggle('hide');
});  
var string1=document.getElementById('password').value;
var string2=document.getElementById('cpassword').value; 
const popup=document.querySelector('.popup-wrapper');  
const form =document.querySelector('.registration-form'); 
form.addEventListener('submit',e=>{
e.preventDefault(); 
if(string1==string2) 
{  
popup.classList.remove('hide'); 
} 
else 
{
    alert('password not matched with previous one');
}
});
const button=document.querySelector('.close');
button.addEventListener('click',() =>{
popup.classList.toggle('hide');
}); 
const applicationNumber=document.querySelector('.application-number'); 
var user_id= Math.floor(((new Date().getTime()/1000 % 1000000007)*Math.floor(Math.random()*10+1)));  
// alert(user_id);
applicationNumber.innerText=user_id;  



