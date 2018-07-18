import fittxt from 'fittxt'

fittxt('.test', {
  factor: 6,
  min: 50,
  max: 600,
  throttleTime: 500
})
fittxt(['.test', '.foop'])
fittxt(document.querySelector('.test'))
