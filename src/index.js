// https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf
const throttle = (func, limit) => {
  let lastFunc
  let lastRan
  return function () {
    const context = this
    const args = arguments
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(function () {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}

const raf = window.requestAnimationFrame || ((cb) => setTimeout(cb, 0))

function fittxt (
  elems,
  {
    factor = 8,
    min = Number.NEGATIVE_INFINITY,
    max = Number.POSITIVE_INFINITY,
    throttleTime = 200
  } = {}
) {
  if (!Array.isArray(elems)) {
    elems = [elems]
  }

  elems = elems.map(
    elem => (typeof elem === 'string' ? document.querySelector(elem) : elem)
  )

  function resize (elem, factor) {
    const width = elem.clientWidth
    raf(() => {
      elem.style.fontSize = Math.max(Math.min(width / factor, parseFloat(max)), parseFloat(min))
    })
  }

  elems.forEach(elem => {
    const wrapper = throttle(() => resize(elem, factor), throttleTime)
    window.addEventListener('resize', wrapper)
    window.addEventListener('orientationchange', wrapper)
    resize(elem, factor)
  })
}

export default fittxt
