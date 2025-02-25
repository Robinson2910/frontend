import { useState } from "react";

function SlowComponent() {
  // If this is too slow on your maching, reduce the `length`
  const words = Array.from({ length: 100_000 }, () => "WORD");
  return (
    <ul>
      {words.map((word, i) => (
        <li key={i}>
          {i}: {word}
        </li>
      ))}
    </ul>
  );
}

function Counter({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
      {children}
    </div>
  );
}
export default function Test() {
  // In React, when you have a component inside another component (like `SlowComponent` inside `Counter` in your example),
  // React checks if that inner component needs to be updated when something changes, like the state.

  // Imagine `SlowComponent` is like a toy.
  // React keeps an eye on this toy, and when the state in `Counter` changes,
  //  React decides whether it needs to give a new toy or if it can keep the old one.

  // Now, React decides this based on how it recognizes the toy.
  //  In your case, it recognizes the toy by looking at its features, like its color, shape, and size.
  //  In React's world, these features are like the identity of the component.

  // So, if the features (identity) of the toy (component) don't change,
  //  React thinks it's the same old toy and doesn't bother giving a new one. But if the features change, React decides it's a different toy and gives you a new one.

  // In the code you provided, the `SlowComponent` is always the same toy (same identity) because it's created inside the `Test` component. Even if the state in `Counter` changes, React doesn't see a reason to replace the toy because it looks the same.

  // In essence, React cares about whether it's dealing with the same thing or something new. The `key` prop, which we talked about earlier, is like putting a name tag on the toy, making it easier for React to tell if it's the same one or a different one. But in your example, since the toy is always created in the same way, React recognizes it without needing a name tag.
  return <Counter>{<SlowComponent />}</Counter>;
}
