import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Loader, showLoader, hideLoader } from './lib';
import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <div>
        <Loader id="loader-1"/>
        <Button onClick={() => showLoader('loader-1')}>Show</Button>
        <Button onClick={() => hideLoader('loader-1')}>hide</Button>
      </div>
      <div>
        <Loader id="loader-2"/>
        <Button onClick={() => showLoader('loader-2')}>Show</Button>
        <Button onClick={() => hideLoader('loader-2')}>hide</Button>
      </div>
      <div>
        <Loader id="loader-3"/>
        <Button onClick={() => showLoader('loader-3')}>Show</Button>
        <Button onClick={() => hideLoader('loader-3')}>hide</Button>
      </div>
      
    </div>
  );
}

export default App;
