  // const image=document.querySelector('imagecarrier')

let imag = document.getElementById("imgs")
let button1 = document.getElementById("left")
let button2 = document.getElementById("right")
  
// let container=document.querySelector('container')

let immg = document.querySelectorAll("#imgs img")

  // console.log(immg)
  
let indexxx = 0;
let interval = setInterval(run, 2000)

function run() {
  indexxx++;
  changee();
}

function changee() {
  if (indexxx > immg.length - 1) {
    indexxx = 0;
  } else if (indexxx < 0) {
    indexxx = immg.length - 1;
    console.log(changee);
  }

  imag.style.transform = `translateX(${-indexxx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

button1.addEventListener("click", () => {
  indexxx++;

  changee();
  resetInterval();
});

button2.addEventListener("click", () => {
  indexxx--;

  changee();
  resetInterval();
});
