import React from 'react';
import Gradient from './components/gradients/Gradient';
import Header from './components/layout/Header';

// Placeholder
const colors = [
  '#2476FF', '#7B4CF9', '#D121F2'
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
