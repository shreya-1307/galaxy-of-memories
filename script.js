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
"Wish accepted.<br>Your wish has been safely sent to the stars...<br><br>Now, let's celebrate. 🎂🤍";



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

const specialDay =
document.querySelector(".specialDay");

specialDay.addEventListener("click",()=>{

    startBirthdayFireworks();

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

/* =====================================
        PREMIUM FIREWORK ENGINE
===================================== */

const fireCanvas = document.getElementById("fireCanvas");
const ctx = fireCanvas.getContext("2d");

let W, H;

function resizeFireCanvas() {
    W = fireCanvas.width = window.innerWidth;
    H = fireCanvas.height = window.innerHeight;
}

resizeFireCanvas();
window.addEventListener("resize", resizeFireCanvas);

let rockets = [];
let particles = [];

class Rocket {

    constructor(x, color) {

        this.x = x;
        this.y = H + 20;

        this.targetY = H * (0.18 + Math.random() * 0.25);

        this.speed = 8 + Math.random() * 3;

        this.color = color;

        this.trail = [];

    }

    update() {

        this.y -= this.speed;

        this.trail.push({
            x: this.x,
            y: this.y
        });

        if (this.trail.length > 12)
            this.trail.shift();

        if (this.y <= this.targetY) {

            explode(this.x, this.y, this.color);

            return false;
        }

        return true;
    }

    draw() {

        // trail

        for (let i = 0; i < this.trail.length; i++) {

            const t = this.trail[i];

            ctx.beginPath();

            ctx.arc(
                t.x,
                t.y,
                i * 0.5,
                0,
                Math.PI * 2
            );

            ctx.fillStyle = `rgba(255,220,180,${i/12})`;

            ctx.fill();
        }

        // rocket

        ctx.beginPath();

        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);

        ctx.fillStyle = this.color;

        ctx.shadowBlur = 20;

        ctx.shadowColor = this.color;

        ctx.fill();

        ctx.shadowBlur = 0;
    }

}

class Particle {

    constructor(x, y, color) {

        this.x = x;
        this.y = y;

        const angle = Math.random() * Math.PI * 2;

        const speed = Math.random() * 8 + 2;

        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;

        this.life = 120;

        this.color = color;

        this.size = Math.random() * 3 + 1;

    }

    update() {

        this.x += this.vx;
        this.y += this.vy;

        this.vy += 0.04;      // gravity

        this.vx *= 0.99;
        this.vy *= 0.99;

        this.life--;

        return this.life > 0;
    }

    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = this.color;

        ctx.shadowBlur = 15;

        ctx.shadowColor = this.color;

        ctx.fill();

        ctx.shadowBlur = 0;

    }

}
function explode(x, y, color) {

    // Sky flash
    const overlay = document.getElementById("fireworkOverlay");

    overlay.classList.add("skyFlash");

    setTimeout(() => {
        overlay.classList.remove("skyFlash");
    }, 350);

    // Camera shake
    document.body.style.animation = "boom .25s";

    setTimeout(() => {
        document.body.style.animation = "";
    }, 250);

    // Brightness flash
    document.body.style.filter = "brightness(1.15)";

    setTimeout(() => {
        document.body.style.filter = "brightness(1)";
    }, 180);

    // Particles
    for (let i = 0; i < 220; i++) {

        particles.push(
            new Particle(x, y, color)
        );

    }

}

function animateFireworks() {

    ctx.clearRect(0, 0, W, H);

    rockets = rockets.filter(r => {

        r.draw();

        return r.update();

    });

    particles = particles.filter(p => {

        p.draw();

        return p.update();

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();
/* =====================================
        FIREWORK SHOW
===================================== */

const fireColors = [
    "#FFD700", // Gold
    "#FFFFFF", // White
    "#FF69B4", // Pink
    "#87CEFA", // Sky Blue
    "#FFA500", // Orange
    "#C084FC"  // Purple
];

function launchRocket(x){

    rockets.push(
        new Rocket(
            x,
            fireColors[
                Math.floor(Math.random()*fireColors.length)
            ]
        )
    );

}

function startBirthdayFireworks(){

    const overlay =
    document.getElementById("fireworkOverlay");

    const title =
    document.getElementById("birthdayTitle");

    overlay.style.transition = "none";
overlay.style.visibility = "visible";
overlay.style.opacity = "1";

requestAnimationFrame(() => {
    overlay.style.transition = "opacity 1.2s ease";
});
    playFireworkSound();

    title.style.opacity="0";

    // Rocket 1
    setTimeout(()=>{
        launchRocket(W*0.20);
    },700);

    // Rocket 2
    setTimeout(()=>{
        launchRocket(W*0.75);
    },1700);

    // Rocket 3
    setTimeout(()=>{
        launchRocket(W*0.45);
    },2800);

    // Rocket 4
    setTimeout(()=>{
        launchRocket(W*0.30);
    },3900);

    // Rocket 5
    setTimeout(()=>{
        launchRocket(W*0.65);
    },4800);

    // Show title
    setTimeout(()=>{
        title.style.opacity="1";
    },5600);

    // Fade out
    setTimeout(() => {

    overlay.style.transition = "opacity 1.5s ease";
    overlay.style.opacity = "0";

    setTimeout(() => {

        overlay.style.visibility = "hidden";
        title.style.opacity = "0";

    }, 1500);

}, 9000);

function playFireworkSound(){

    const sound = document.getElementById("fireworkSound");
    const bgm = document.getElementById("bgm");

    bgm.volume = 0.08;

    sound.currentTime = 0;
    sound.volume = 0;

    sound.play().catch(()=>{});

    let v = 0;

    const fade = setInterval(()=>{

        v += 0.05;

        sound.volume = Math.min(v,0.75);

        if(v >= 0.75){
            clearInterval(fade);
        }

    },60);

    sound.onended = ()=>{

        bgm.volume = 0.18;

    };

}
}
/* ===========================
      STARS
=========================== */

const stars =
document.getElementById("stars");

for(let i=0;i<180;i++){

const s=document.createElement("div");

s.className="star";

const size=Math.random()*2+1;

s.style.width=size+"px";
s.style.height=size+"px";

s.style.left=Math.random()*100+"%";
s.style.top=Math.random()*100+"%";

s.style.animationDuration=
2+Math.random()*4+"s,"+
(12+Math.random()*18)+"s";

stars.appendChild(s);

}
const fireflies =
document.getElementById("fireflies");

for(let i=0;i<18;i++){

const f=document.createElement("div");

f.className="firefly";

f.style.left=Math.random()*100+"%";

f.style.bottom=Math.random()*25+"%";

f.style.animationDelay=
Math.random()*12+"s";

f.style.animationDuration=
10+Math.random()*8+"s";

fireflies.appendChild(f);

}
function createShootingStar(){

const area=
document.getElementById("shootingStars");

const s=document.createElement("div");

s.className="shootingStar";

s.style.left=
(60+Math.random()*40)+"%";

s.style.top=
Math.random()*35+"%";

area.appendChild(s);

setTimeout(()=>{

s.remove();

},1800);

}

setInterval(()=>{

createShootingStar();

},8000+Math.random()*6000);
document.querySelector(".calendarBox").style.transform =
"scale(1.04)";

setTimeout(()=>{

document.querySelector(".calendarBox").style.transform =
"scale(1)";

},500);
