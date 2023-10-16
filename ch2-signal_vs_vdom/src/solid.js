import { createSignal } from 'https://cdn.skypack.dev/solid-js'
import { render } from 'https://cdn.skypack.dev/solid-js/web'
import html from 'https://cdn.skypack.dev/solid-js/html'

const CounterWrapper = () => {
  console.log('CounterWrapper')
  const [count] = createSignal(0)

  return DisplayValue(count())
}

function DisplayValue(value) {
  console.log('Solid - DisplayValue')
  return html`<div>The double value is: ${value * 2}</div>`
}

render(CounterWrapper, document.getElementById('solid'))
