const b1=document.getElementById("btn1")
b1.addEventListener('click',()=>{
    if(b1.textContent=="start"){
    b1.innerHTML="stop"
    b1.style.setProperty('background-color','red');
    startTimer()
    }
    else{
    b1.innerHTML="start";
    b1.style.backgroundColor="green";
    stopTimer()
    }
})
let set;
function startTimer(){
  let s=0
  let m=0
  let h=0
 set= setInterval(()=>{
    if(m>59 && s>59){
      m=0 
      s=0
      hour.innerHTML=(++h).toString().padStart('2',0);
      }
     else if(s>59){
      s=0;
     min.innerHTML=(++m).toString().padStart('2',0);
     }
     else
     seconds.innerHTML=(++s).toString().padStart('2',0);
  },1000)
}
function stopTimer(){
    clearInterval(set);
    v.innerHTML+=`<br>`


}
const hour=document.getElementById("hour")
const min=document.getElementById("minute")
const seconds=document.getElementById("seconds")

const v =document.getElementById("ch")


