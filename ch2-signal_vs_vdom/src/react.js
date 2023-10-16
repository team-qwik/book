const CounterWrapper = () => {
  console.log('React - CounterWrapper')
  const [count, setCount] = React.useState(0)

  return (
    <CounterControl setCount={setCount}>
      <DisplayValue value={count} />
    </CounterControl>
  )
}

function CounterControl({ setCount, children }) {
  console.log('React - CounterControl')
  return (
    <div style={{ display: 'flex' }}>
      <button onClick={() => setCount((val) => val - 1)}>-1</button>
      {children}
      <button onClick={() => setCount((val) => val + 1)}>+1</button>
    </div>
  )
}

function DisplayValue({ value }) {
  console.log('React - DisplayValue')
  return <div>The double value is: {value * 2}</div>
}

const root = ReactDOM.createRoot(document.getElementById('react'))
root.render(<CounterWrapper />)
