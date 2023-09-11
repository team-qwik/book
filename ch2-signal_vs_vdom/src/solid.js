// import { createSignal, JSX, Setter } from "solid-js"
import { createSignal } from "https://cdn.skypack.dev/solid-js"
import { render } from "https://cdn.skypack.dev/solid-js/web"
import html from "https://cdn.skypack.dev/solid-js/html"

console.log("okok")

const CounterWrapper = () => {
  console.log("CounterWrapper")
  const [count, setCount] = createSignal(0)

  return DisplayValue(count())
}

// function CounterControl({ setCount, children }) {
//   console.log("Solid - CounterControl")

//   return (
//     <div class="flex-row">
//       <button onClick={() => setCount((v) => v - 1)}>-1</button>
//       {children}
//       <button onClick={() => setCount((v) => v + 1)}>+1</button>
//     </div>
//   )
// }

function DisplayValue(value) {
  console.log("Solid - DisplayValue")
  return html`<div>The double value is: ${value * 2}</div>`
}

render(CounterWrapper, document.getElementById("solid"))
