import React from 'react';
import Color from './color/Color';
import Interpolator from './color/Interpolator';
import Gradient from './components/gradients/Gradient';
import Header from './components/layout/Header';

// Placeholder
const start = new Color('EFF74F');
const end = new Color('FF3A24');
const int = new Interpolator(start, end, 5);

function App() {
  return (
    <div className="App">
      <Header />
      <Gradient colors={int.getRGBInterpolation()} />
      <Gradient colors={int.getHSVInterpolation()} />
    </div>
  );
}

export default App;
