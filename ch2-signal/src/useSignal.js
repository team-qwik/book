// Signal
const context = []

/**
 * Return observer from context
 * @returns
 */
function getCurrentObserver() {
  return context.at(-1)
}

/**
 * Create effect and inject in context
 * @param {function} fn
 */
export function createEffect(fn) {
  const execute = () => {
    context.push(execute)

    try {
      fn()
    } finally {
      context.pop()
    }
  }
  execute() // Appel initial de l'effet
}

/**
 * Create signal
 * @param {*} value
 * @returns
 */
export function createSignal(value) {
  const subscribers = []

  function get() {
    const current = getCurrentObserver()
    if (current) {
      subscribers.push(current)
    }
    return value
  }

  function set(nextValue) {
    value = nextValue
    subscribers.forEach((sub) => sub())
  }

  return [get, set]
}

// Usage
const [value, setValue] = createSignal('initial value')

function printValue() {
  console.log(`useSignal : ${value()}`)
}

createEffect(printValue)
setValue('useSignal : new Value')
