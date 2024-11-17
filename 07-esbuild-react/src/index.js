import { createRoot } from 'react-dom/client';

import Header from './Header';

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app'));
root.render(<Header />);
