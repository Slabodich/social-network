import './App.css';
import React, {Profiler} from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Musics from "./components/Musics/Musics";
import Settings from "./components/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <div className='app-content'>
                    <Route path='/Dialogs' component={Dialogs} />
                    <Route path='/Profile' component={Profile}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Musics' component={Musics}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
