import React from 'react';
import { createRoot } from 'react-dom/client';

import Nav from './Nav';

function App() {
  return (
    <div>
      <h3>Nav Application</h3>
      <Nav />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
