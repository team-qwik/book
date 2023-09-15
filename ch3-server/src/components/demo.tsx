import { $, component$ } from '@builder.io/qwik'
import { server$ } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <button
      onClick$={async () => {
        console.log('console côté client')

        const fnServer = server$(() => {
          console.log('console côté serveur')
          return $(() => console.log('console depuis le serveur'))
        })

        const fn = await fnServer()
        fn()
      }}
    >
      test
    </button>
  )
})
