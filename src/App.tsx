import React from 'react';
import Home from './components/Home';
import AccordionProvider from './context/accordion/provider';

const App: React.FC = () => (
  <AccordionProvider>
    <Home />
  </AccordionProvider>
);

export default App;
