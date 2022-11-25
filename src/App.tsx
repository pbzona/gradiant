import React from 'react';
import Color from './color/Color';
import Gradient from './components/gradients/Gradient';
import Header from './components/layout/Header';

// Placeholder
const colors = [
  new Color('2476FF'),
  new Color('7B4CF9'),
  new Color('D121F2')
];

function App() {
  return (
    <div className="App">
      <Header />
      <Gradient colors={colors} />
    </div>
  );
}

export default App;
