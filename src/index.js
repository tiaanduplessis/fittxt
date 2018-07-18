// https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf
const throttle = (func, limit) => {
  let inThrottle
  return function () {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
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
