const body = document.querySelector('body')

body.addEventListener('mousemove', e => {
  const trail = document.createElement('div')
  trail.className = 'trail'

  const mouseX = e.clientX - body.getBoundingClientRect().left
  const mouseY = e.clientY - body.getBoundingClientRect().top

  trail.style.left = mouseX - trail.clientWidth - 30 + 'px'
  trail.style.top = mouseY - trail.clientHeight - 30 + 'px'

  /* const trailX = mouseX / body.clientWidth
  const trailY = mouseY / body.clientHeight

  const newColor = 'rgb(' + (255 * trailX) + ',' + (255 * trailY) + ', 100)'
  trail.style.backgroundColor = newColor */

  body.appendChild(trail)

  setTimeout(function () {
    body.removeChild(trail)
  }, 500)
})