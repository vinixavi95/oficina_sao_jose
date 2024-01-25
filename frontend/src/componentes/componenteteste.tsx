import { createSignal } from 'solid-js';

function Counter() {
  const [count, setCount] = createSignal(0);

  const increment = () => setCount(count() + 1);
  const decrement = () => setCount(count() - 1);

  return (
    <div>
      <p>Contador: {count()}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

export default Counter;
