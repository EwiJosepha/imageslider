// const image=document.querySelector('imagecarrier')

const imag = document.getElementById('imgs')
const button1 = document.getElementById('left')
const button2 = document.getElementById('right')
// let container=document.querySel xsector('container')
const immg = document.querySelectorAll('#imgs img')



// let immgLenght = immg.length
// let indexx = 0
// while(indexx < immgLenght ){
// imag.style.transform = `translateX(${-indexx * 500}px)`
// console.log(indexx);
//   indexx++
// }


let indexxx = 0
let interval = setInterval(() => {
  indexxx++
  changee()
}, 2000)

function changee() {
  if (indexxx > immg.length - 1) {
    indexxx = 0
  } else if (indexxx < 0) {
    indexxx = immg.length - 1
  }
  imag.style.transform = `translateX(${-indexxx * 500}px)`
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(() => {
    indexxx++
    changee()
  }, 2000)
}

button1.addEventListener('click', () => {
  indexxx++
  changee()
  resetInterval()
})

button2.addEventListener('click', () => {
  indexxx--
  changee()
  resetInterval()
})
