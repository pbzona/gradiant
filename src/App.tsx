import React from 'react';
import Gradient from './components/gradients/Gradient';
import Header from './components/layout/Header';
import Panel from './components/layout/Panel';

function App() {
  return (
    <div className="App">
      <Header />
      <Gradient />
      <Panel>
        <h1>Hello Panel</h1>
      </Panel>
    </div>
  );
}

export default App;
