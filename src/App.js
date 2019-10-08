import React from 'react';
import MainRouter from './router';
import { amplifySetup } from './amplify';

amplifySetup();

function App() {
  return (
    <div className="App">
      <MainRouter />
    </div>
  );
}

export default App;
