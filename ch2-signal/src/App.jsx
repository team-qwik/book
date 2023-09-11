import { createSignal } from 'solid-js'

function App() {
  const [count, setCount] = createSignal(0)

  function increment() {
    setCount(count() + 1)
  }

  return (
    <div>
      <p>Count: {count()}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App
