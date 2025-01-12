#### Troubleshooting: Shared module is not available for eager consumption

This problem only arises when we configure our dependencies to be `shared`.

By sharing a dependency, we make it to be loaded asynchronously (lazy).

Assuming `index.js` is the entry file to webpack.

index.js:

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return <h1>App</h1>;
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

Until here everything works fine, webpack loads `react` first then it loads `index.js` file.

Meaning, `react` available to use already (eager).

When we make `react` a shared dependency. It is (by default) loaded lazily.

Meaning, in our `index.js` file `react` is not available **yet**.

Now nothing in our code changed, so webpack still loads `index.js` eagerly and it does not find `react` (because it is not loaded yet).

And we receive: `Shared module is not available for eager consumption`.

To solve this, webpack recommends to make `index.js` itself to be loaded asynchronously (lazy).

To do this, we create a `bootstrap.js` file and move the contents of `index.js` to that and replace the contents of `index.js` with:

```js
import('./bootstrap');
```

Now, doing this tells webpack to load `index.js` (entry point to webpack is still `index.js`) asynchronously, which means it can now see that since `react` is a dependency so it will `react` first then it loads our app contents.

This also means -> If `index.js` didn't use `react`, everything would've still worked, without creating `bootstrap.js`.
