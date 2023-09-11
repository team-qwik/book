import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import styles from './counter.css?inline';

export default component$(() => {
  const count = useSignal(0);

  useStylesScoped$(styles);

  return (
    <div>
      <span>{count.value}</span>
      <button onClick$={() => count.value++}>+1</button>
    </div>
  );
});