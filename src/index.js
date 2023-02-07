import React from 'react';
import { createRoot } from 'react-dom';

function App() {
  return <h1>Hello World!</h1>;
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
