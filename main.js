const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')

const infoBtn = document.querySelector('.fa-question')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')

// zmiana kolorów
const colorBtn = document.querySelector('.fa-paint-brush')
const colorPanel = document.querySelector('.colors')
const colorOne = document.querySelector('.one')
const colorTwo = document.querySelector('.two')
const colorThree = document.querySelector('.three')
let root = document.documentElement

let countTime
let minutes = 0
let seconds = 0

let timesArr = []

const startTimer = () => {
	clearInterval(countTime)

	countTime = setInterval(() => {
		if (seconds <= 9) {
			stopwatch.textContent = `${minutes}:0${seconds}`
		} else if (seconds >= 10 && seconds <= 59) {
			stopwatch.textContent = `${minutes}:${seconds}`
		} else {
			minutes++
			seconds = 0
			stopwatch.textContent = `${minutes}:00`
		}
		seconds++
	}, 200)
}

const pauseTimer = () => {
	clearInterval(countTime)
}

const stopTimer = () => {
	time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`

	if (stopwatch.textContent !== '0:00') {
		time.style.visibility = 'visible'

		timesArr.push(stopwatch.textContent)
	}

	clearStuff()
}

const resetTimer = () => {
	time.style.visibility = 'hidden'
	clearStuff()
	timesArr = []
}

const clearStuff = () => {
	clearInterval(countTime)
	stopwatch.textContent = '0:00'
	timeList.textContent = ''
	seconds = 0
	minutes = 0
}

const showArchive = () => {
	timeList.textContent = ''
	let X = 1
	timesArr.forEach(time => {
		const newTime = document.createElement('li')
		newTime.innerHTML = `Pomiar nr ${X}: <span>${time}</span>`
		X++

		timeList.append(newTime)
	})
}

const showModal = () => {
	if (!(modalShadow.style.display === 'block')) {
		modalShadow.style.display = 'block'
	} else {
		modalShadow.style.display = 'none'
	}

	modalShadow.classList.toggle('modal-animation')
}

startBtn.addEventListener('click', startTimer)
pauseBtn.addEventListener('click', pauseTimer)
stopBtn.addEventListener('click', stopTimer)
resetBtn.addEventListener('click', resetTimer)
historyBtn.addEventListener('click', showArchive)

infoBtn.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', showModal)

window.addEventListener('click', e =>
	e.target === modalShadow ? showModal() : false
)

// zmiana kolorów
colorBtn.addEventListener('click', () => {
	colorPanel.classList.toggle('show-colors')
})

colorOne.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(250, 20, 6)')
	root.style.setProperty('--hover-color', 'rgb(209, 33, 24)')
})

colorTwo.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(6, 173, 250)')
	root.style.setProperty('--hover-color', 'rgb(28, 145, 199)')
})

colorThree.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(0, 255, 42)')
	root.style.setProperty('--hover-color', 'rgb(28, 209, 58)')
})
