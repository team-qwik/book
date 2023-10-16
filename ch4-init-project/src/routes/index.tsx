import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return <div>Hello world</div>
})

export const head: DocumentHead = {
  title: 'Our first Qwik site',
  meta: [
    {
      name: 'description',
      content: 'Our first Qwik site description'
    }
  ]
}
