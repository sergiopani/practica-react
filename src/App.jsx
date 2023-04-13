import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Registro from './components/Registro';
import UserProvider from './context/UserProvider';
import JsxRender from './components/JsxRender';
function App() {

  return (
    <UserProvider>
      <div className="App">
        <JsxRender />
      </div>
    </UserProvider>
  );
}

export default App;
