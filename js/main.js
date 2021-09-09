//DOM ELEMENTS
const time = document.getElementById('time');
const greeting=document.getElementById('greeting');
const namo=document.getElementById('name');
const focus=document.getElementById('focus');

//show time
function showTime(){
    let today=new Date();
    let hour=today.getHours();
    let min = today.getMinutes();

    //deciding AM/PM
    const ampm = hour>=12? "PM":"AM";
    //12hr format
    hour=hour%12 || 12;

    //output time

    time.innerHTML= `${hour}<span>:</span>${addZero(min)} ${ampm}`;

    setTimeout(showTime,1000);
}
function addZero(n){
    return ((parseInt(n,10) < 10 ? '0':'')+n);

}
//set background and greeting
function set(){
    let today =new Date(),
    hour = today.getHours();
    if(hour<11)
    {   
        document.body.style.backgroundImage = "url('../images/morning.jpg')";
        document.body.style.backgroundSize = "100% 100%";
        greeting.textContent="Good Morning, "
    }
    else if(hour<17)
    {
        document.body.style.backgroundImage = "url('../images/eve.jfif')";
        document.body.style.backgroundSize = "100% 100%";
        greeting.textContent="Good Evening, "
    }
    else
    {
        document.body.style.backgroundImage = "url('../images/night.jpg')";
        document.body.style.backgroundSize = "100% 100%";
        greeting.textContent="Good Night, "
        document.body.style.color='white';
    }
}
//get name
function getName(){
    if(localStorage.getItem('namo')==null){
        namo.textContent="Hustler!";
    }
    else{
        namo.textContent=localStorage.getItem('namo');
    }
}
//setName
function setName(e){
    if(e.type=== 'keypress'){
        //making sure enter is pressed
        //each key has a unique identifier, enter key is 13
        if(e.which==13 || e.keyCode==13){
            localStorage.setItem('namo',e.target.innerText);
            namo.blur();//takes us out of the entering phase
            //if not moved out, after entering the name if we press enter,
            //we are moved to the next line to enter data.
        }
    }
    else{
        localStorage.setItem('namo',e.target.innerText);
    }
}
//get focus
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent="[Enter today's agenda]";
    }
    else{
        focus.textContent = localStorage.getItem('focus');
    }
}
//set focus
function setFocus(e){
    if(e.type ==='keypress'){
        if(e.which==13 || e.keyCode==13){
            localStorage.setItem('focus',e.target.innerText);
            focus.blur();
        }
    }
    else{
        localStorage.setItem('focus',e.target.innerText);
    }
}
namo.addEventListener('keypress',setName);
namo.addEventListener('blur',setName);
focus.addEventListener('keypress',setFocus);
focus.addEventListener('blur',setFocus);
//Run
showTime();
set();
getName();
getFocus();