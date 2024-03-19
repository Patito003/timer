const timerMili = document.querySelector('#timerMili')
const timerSegs = document.querySelector('#timerSegs')
const timerMin = document.querySelector('#timerMin')
const timerHour = document.querySelector('#timerHour')
const btnStart = document.querySelector('#start')
const btnPause = document.querySelector('#pause')
const btnReset = document.querySelector('#reset')

let timer
let mili = 0, segs = 0, min = 0, hr = 0

function updateTimer() {
  mili++
  if (mili >= 100) {
    mili = 0
    segs++
    if (segs >= 60) {
      segs = 0
      min++
      if (min >= 60) {
        min = 0
        hr++
      }
    }
  }
  updateDisplay(mili, segs, min, hr)
}

const formatarDisplay = num => num < 10 ? '0' + num : num

function updateDisplay() {
  timerMili.innerHTML = formatarDisplay(mili)
  timerSegs.innerHTML = formatarDisplay(segs)
  timerMin.innerHTML = formatarDisplay(min)
  timerHour.innerHTML = formatarDisplay(hr)
}

btnStart.addEventListener('click', () => {
  timer = setInterval(updateTimer, 10)
})

btnPause.addEventListener('click', () => {
  clearInterval(timer)
})

btnReset.addEventListener('click', () => {
  mili = segs = min = hr = 0
  updateDisplay(mili, segs, min, hr)
})