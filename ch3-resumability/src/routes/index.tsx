import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Counter from '../components/counter/counter'

export default component$(() => {
  return <Counter />;
});

export const head: DocumentHead = {
  title: "Basic Counter",
  meta: [
    {
      name: "description",
      content: "Compteur basique avec Qwik",
    },
  ],
};
