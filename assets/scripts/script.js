const imag = document.getElementById('imgs')
const button1 = document.getElementById('left')
const button2 = document.getElementById('right')
const immg = document.querySelectorAll('#imgs img')

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
  interval
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
