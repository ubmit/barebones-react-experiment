'use strict';

import React from 'react';
import { createRoot } from 'react-dom';

function App() {
  return <h1>Hello World!</h1>;
}

const rootNode = document.getElementById('root');
const root = createRoot(rootNode);
root.render(App);
