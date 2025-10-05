import { useState } from 'react'
import { MenuBar } from './components/MenuBar/MenuBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { MainPage } from './pages/MainPage';

function App() {


    return (
    <>
        <MenuBar></MenuBar>
        <MainPage></MainPage>
    </>
    )
}

export default App
