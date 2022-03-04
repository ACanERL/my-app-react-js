import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link,Switch} from "react-router-dom";
import Header from './Components/Header';
import Section  from './Components/Section';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
    </div>
  );
}

export default App;
