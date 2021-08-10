import './App.css';
import React, { Profiler } from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <div className='app-content'>
          <Dialogs />
      </div>
      {/*<Profile />*/}

    </div >
  );
}

export default App;
