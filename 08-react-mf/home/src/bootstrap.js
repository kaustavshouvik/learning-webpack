import React from 'react';
import { createRoot } from 'react-dom/client';

const Nav = React.lazy(() => import('nav/Nav'));

function App() {
  return (
    <div>
      <h3>Home Application</h3>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Nav />
      </React.Suspense>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
