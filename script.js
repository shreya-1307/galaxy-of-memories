// =========================

//        LETTER MESSAGE

// =========================



const msg = `Dear You 🙃,



Some people do not loudly enter your life… They slowly become a part of your thoughts without even trying. You became that person for me.


I do not even know when this day started feeling so special. It was not sudden, it just quietly grew over time, like my heart started waiting for it without realizing it.


There is something about you that stays with me, even in silence. Not in big moments, but in small ones that I never forget.


We have had our ups and downs, confusion and distance too… But somehow, nothing ever really feels like the end with you. Maybe that is what makes this real.


You have changed how I understand feelings. It is not always loud or perfect,it can also be calm, steady, and still deeply meaningful.



I just hope life gives you peace, growth, and everything good you deserve. Not just today, but always.

You have always been special and important to me, and you always will be. You mean everything to me, even if I find it difficult to say it out loud.


And I hope you never lose that smile… because it matters more than you know.



Happy Birthday 🤎


— Zreyaaaaaa

P.S. Thank you for every memory.`;




// =========================

//        SHOW PAGE

// =========================



function show(id){



document.querySelectorAll(".page")

.forEach(page=>{



page.classList.remove("show");



});



document.getElementById(id)

.classList.add("show");



}





// =========================

//        ON LOAD

// =========================



window.onload = function(){



petals();



startCountdown();



};





// =========================

//       COUNTDOWN

// =========================



function startCountdown(){



let count = 3;



const counter = setInterval(()=>{



document.getElementById("count")

.innerText = count;



count--;



if(count < 0){



clearInterval(counter);



document.getElementById("count")

.style.display = "none";



document.querySelector(".birthdayText")

.style.opacity = "1";



document.querySelector(".tapText")

.style.opacity = "1";



}



},1000);



}





// =========================

//       INTRO CLICK

// =========================



document.getElementById("intro")

.addEventListener("click",()=>{



const music =

document.getElementById("bgm");



music.play().then(()=>{



fadeMusic();



}).catch(()=>{});



show("login");



});





// =========================

//      MUSIC FADE

// =========================



function fadeMusic(){



let music =

document.getElementById("bgm");



music.volume = 0.18;



let vol = 0;



let rise = setInterval(()=>{



vol += 0.05;



music.volume = vol;



if(vol >= 0.06){



clearInterval(rise);



}



},250);



}





// =========================

//      PASSWORD CHECK

// =========================



function checkPass(){



let pass =

document.getElementById("pass")

.value.toLowerCase();



if(pass === "pikachu"){


vibratePhone(80);
show("wish");



}else{



document.getElementById("msg")

.innerText =

"Sorry... this is only for someone special 💖";



}



}





// =========================

//       NEXT PAGE

// =========================



function go(id){



show(id);



if(id === "letter"){



typeLetter();



}



}

/* =========================

      LIVE COUNTDOWN

========================= */



const birthdayDate =

new Date("July 13, 2026 00:00:00").getTime();



let celebrationStarted = false;



function updateCountdown(){



const now =

new Date().getTime();



const distance =

birthdayDate - now;



/* DAYS */



const days =

Math.floor(

distance / (1000*60*60*24)

);



/* HOURS */



const hours =

Math.floor(

(distance %

(1000*60*60*24))

/

(1000*60*60)

);



/* MINUTES */



const minutes =

Math.floor(

(distance %

(1000*60*60))

/

(1000*60)

);



/* SECONDS */



const seconds =

Math.floor(

(distance %

(1000*60))

/

1000

);



/* UPDATE UI */



document.getElementById("days")

.innerText =

String(days).padStart(2,"0");



document.getElementById("hours")

.innerText =

String(hours).padStart(2,"0");



document.getElementById("minutes")

.innerText =

String(minutes).padStart(2,"0");



document.getElementById("seconds")

.innerText =

String(seconds).padStart(2,"0");



/* WHEN COUNTDOWN ENDS */



if(distance <= 0 && !celebrationStarted){



celebrationStarted = true;



clearInterval(timer);



/* Hide countdown */



document.querySelector(".liveCountdown")

.style.display = "none";



/* Celebration text */



document.querySelector(".birthdayText")

.innerHTML =

"🎉 Happiest Birthday Cutooooo 💖";



/* Confetti */



createConfetti();



/* Music */



document.getElementById("bgm")

.play();



/* Open website automatically */



setTimeout(()=>{



show("login");



},4000);



}



}



/* START */



const timer =

setInterval(updateCountdown,1000);



updateCountdown();





// =========================

//       BLOW CANDLE

// =========================



function blow(candle,event){



event.stopPropagation();



candle.style.opacity = "0";



candle.style.transform =

"translateY(-12px)";



}







function cutCake(){



const cake =

document.querySelector(".cake3d");



cake.style.transform =

"scale(.92) rotate(2deg)";



cake.style.transition = ".4s";



for(let i=0;i<3;i++){



setTimeout(()=>{

createConfetti();

},i*400);



}



const lights =

document.querySelector(".partyLights");



lights.style.animation =

"partyGlow .5s infinite alternate";



setTimeout(()=>{



cake.style.transform = "";



},500);

}



/* BIG CONFETTI */



for(let i=0;i<3;i++){

setTimeout(()=>{

createConfetti();

},i*400);

}



/* PARTY SOUND EFFECT FEEL */



document.querySelector(".partyLights")

.style.animation =

"partyGlow .6s infinite alternate";



setTimeout(()=>{



cake.style.transform = "";



},500);







// =========================

//       OPEN GIFT

// =========================



function openGift(){



const lid =

document.querySelector(".lid");



const gift =

document.querySelector(".gift3d");



lid.style.transform =

"rotateX(120deg) translateY(-38px)";



gift.style.transform =

"scale(1.05)";
vibratePhone(100);



createConfetti();



setTimeout(()=>{



go("letter");



},1200);



}





// =========================

//      TYPE LETTER

// =========================



function typeLetter(){



const box =

document.getElementById("type");



box.innerHTML = "";



let i = 0;



let typing = setInterval(()=>{



let char = msg.charAt(i);



if(char === "\n"){



box.innerHTML += "<br>";



}else{



box.innerHTML += char;



}



i++;



box.scrollTop = box.scrollHeight;



if(i >= msg.length){



clearInterval(typing);



}



},55);



}





// =========================

//      FALLING PETALS

// =========================



function petals(){



for(let i=0;i<35;i++){



let petal =

document.createElement("span");



petal.innerHTML = "🌸";



petal.style.left =

Math.random()*100 + "vw";



petal.style.animationDuration =

(5 + Math.random()*6) + "s";



petal.style.fontSize =

(14 + Math.random()*18) + "px";



petal.style.opacity =

(0.5 + Math.random()*0.5);



document

.getElementById("petals")

.appendChild(petal);



}



}





// =========================

//      CONFETTI EFFECT

// =========================



function createConfetti(){



for(let i=0;i<50;i++){



let confetti =

document.createElement("div");



confetti.style.position = "fixed";



confetti.style.width = "10px";

confetti.style.height = "10px";



confetti.style.background =

`hsl(${Math.random()*360},

100%,70%)`;



confetti.style.left =

Math.random()*100 + "vw";



confetti.style.top = "-20px";



confetti.style.borderRadius = "50%";



confetti.style.zIndex = "999";



document.body.appendChild(confetti);



let fall =

confetti.animate([



{

transform:

`translateY(0) rotate(0deg)`

},



{

transform:

`translateY(110vh)

rotate(720deg)`

}



],{



duration:

3000 + Math.random()*2000,



iterations:1



});



fall.onfinish = ()=>{



confetti.remove();



};



}



}





// =========================

//    TOUCH ROTATE GALLERY

// =========================



let slider =

document.querySelector(".slider3d");



let rotateY = 0;



let startX = 0;



let dragging = false;



document.addEventListener(

"touchstart",(e)=>{



if(e.target.closest(".slider3d")){



dragging = true;



startX =

e.touches[0].clientX;



}



});



document.addEventListener(

"touchmove",(e)=>{



if(dragging){



let moveX =

e.touches[0].clientX;



rotateY +=

(moveX - startX) * 0.4;



slider.style.animation = "none";



slider.style.transform =

`perspective(1200px)

rotateY(${rotateY}deg)`;



startX = moveX;



}



});



document.addEventListener(

"touchend",()=>{



dragging = false;



});

/* =========================

   PAGE SWITCH SYSTEM

========================= */



function go(page){



      if(page==="end")

      {

            startEndingType();

      }

document.querySelectorAll('.page').forEach(p=>{

p.classList.remove('show');

});



let target = document.getElementById(page);

if(target){

target.classList.add('show');

}



// 🎯 trigger letter typing automatically

if(page === "letter"){

typeLetter();

}



}



/* =========================

      LOADING SCREEN

========================= */



window.addEventListener("load",()=>{



setTimeout(()=>{



const loading =

document.getElementById("loadingScreen");



if(loading){

loading.style.display="none";

}



document

.getElementById("intro")

.classList.add("show");



},3000);



});



/* =========================

      VOICE NOTE

========================= */



function playVoice(){



document

.getElementById("voiceNote")

.play();



}



/* =========================

      SURPRISE HEART

========================= */



function showLove(){



const msg =

document.getElementById("loveMsg");



msg.innerHTML =

"Thank you for existing in my life 🤍";



msg.style.opacity="1";



document

.getElementById("nextEndBtn")

.style.display="inline-block";



}



/* =========================

      TYPEWRITER ENDING

========================= */



const endingText =

"And in every version of my life... I think I'd still find you 🤍";



let endingIndex=0;



function startEndingType(){



const el =

document.getElementById("endingType");



el.innerHTML="";



const interval = setInterval(()=>{



el.innerHTML +=

endingText.charAt(endingIndex);




endingIndex++;




if(endingIndex >= endingText.length){



clearInterval(interval);



}



},70);



}

function openSecretHeart(){



document.getElementById("secretPopup")

.style.display = "flex";



}



function closeSecretHeart(){



document.getElementById("secretPopup")

.style.display = "none";



}

function openSecretHeart(){

  vibratePhone(150);



document.getElementById("secretPopup").style.display="flex";



document.getElementById("nextEndBtn").style.display="block";



}

window.addEventListener("load",()=>{



let offset = 0;



setInterval(()=>{



const text =

document.getElementById("heartText");



if(text){



offset += 0.5;



text.setAttribute(

"startOffset",

offset + "%"

);



if(offset > 100){

offset = 0;

}



}



},40);



});



function startWish(){



const text =

document.getElementById("wishText");



text.innerHTML =
"✨ Wish accepted.<br>Your wish has been safely sent to the stars...<br><br>Now, let's celebrate. 🎂🤍";



createConfetti();



setTimeout(()=>{



go("cake");



},5000);



}

window.addEventListener("load", () => {



const heart = document.querySelector(".heartReplay");



if (heart) {

heart.addEventListener("click", replaySite);

}



});

function replaySite(){



// =========================

// RESET PAGES

// =========================

document.querySelectorAll(".page").forEach(p=>{

  p.classList.remove("show");

});



document.getElementById("intro").classList.add("show");





// =========================

// RESET GIFT (IMPORTANT FIX)

// =========================

const gift = document.querySelector(".gift3d");

if(gift){

  gift.classList.remove("open");

  gift.style.transform = "";

}



const lid = document.querySelector(".lid");

if(lid){

  lid.style.transform = "";

}





// =========================

// RESET MUSIC (IMPORTANT FIX)

// =========================

const bgm = document.getElementById("bgm");



if(bgm){

  bgm.pause();

  bgm.currentTime = 0;



  // MUST be triggered after click (safe inside replay click)

  setTimeout(()=>{

    bgm.play().catch(()=>{});

  },100);

}





// =========================

// RESET VOICE (if any)

// =========================

const voice = document.getElementById("voiceNote");

if(voice){

  voice.pause();

  voice.currentTime = 0;

}





// =========================

// RESET END TEXT / POPUPS

// =========================

const loveMsg = document.getElementById("loveMsg");

if(loveMsg) loveMsg.innerHTML = "";



const ending = document.getElementById("endingType");

if(ending) ending.innerHTML = "";



document.getElementById("secretPopup").style.display = "none";





// =========================

// CLEAN CONFETTI

// =========================

document.querySelectorAll("div").forEach(el=>{

  if(el.style && el.style.position === "fixed"){

    el.remove();

  }

});



}

window.addEventListener("deviceorientation", (e)=>{

    const moon =
    document.querySelector(".moon");

    if(!moon) return;

    let x = e.gamma * 0.3;
    let y = e.beta * 0.15;

    moon.style.transform =
    `translate(${x}px,${y}px)`;

});
const galaxy =
document.getElementById("galaxy");

for(let i=0;i<80;i++){

    const star =
    document.createElement("div");

    star.classList.add("tinyStar");

let size =
Math.random()*3 + 1;

star.style.width =
size + "px";

star.style.height =
size + "px";

    star.style.left =
    Math.random()*100 + "%";

    star.style.top =
    Math.random()*100 + "%";

    star.style.animationDelay =
    Math.random()*3 + "s";

    star.style.opacity =
    Math.random();

    galaxy.appendChild(star);
}
const specialDay = document.querySelector(".specialDay");

specialDay.addEventListener("click", () => {

    for(let i = 0; i < 8; i++){

        setTimeout(()=>{
            createRosePetals();
        }, i * 250);

    }

});
document.body.style.filter="brightness(2)";

setTimeout(()=>{
document.body.style.filter="brightness(1)";
},150);
function fadeOutMusic(){

const music =
document.getElementById("bgm");

let vol = music.volume;

let fade = setInterval(()=>{

vol -= 0.01;

music.volume = vol;

if(vol <= 0.03){

clearInterval(fade);

}

},150);

}
function vibratePhone(time=50){
  if(navigator.vibrate){
    navigator.vibrate(time);
  }
}
function createRosePetals(){

    for(let i=0;i<35;i++){

        const petal = document.createElement("img");

        petal.src = "petal.png";

        petal.className = "rosePetal";

        petal.style.left = Math.random()*100 + "vw";

        petal.style.width = (18 + Math.random()*18) + "px";

        petal.style.transform =
        `rotate(${Math.random()*360}deg)`;

        petal.style.animationDuration =
        (5 + Math.random()*3) + "s";

        petal.style.animationDelay =
        Math.random()*0.8 + "s";

        document.body.appendChild(petal);

        petal.addEventListener("animationend",()=>{
            petal.remove();
        });

    }

}
