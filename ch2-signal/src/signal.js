import { createEffect, createSignal } from './useSignal'

const [seconds, setSeconds] = createSignal(0)

let h1 = document.createElement('h1')
document.body.append(h1)
console.log('signal : add h1 element')

createEffect(() => {
  h1.textContent = `Seconds:  ${seconds()}`
})

setInterval(() => {
  setSeconds(seconds() + 1)
  console.log('signal : add 1 second')
}, 1000)
