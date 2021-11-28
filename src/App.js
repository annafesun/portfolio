import React, {useEffect, useState} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Slogan from "./components/Slogan/Slogan";
import Footer from "./components/Footer/Footer";
import {Events} from "react-scroll";

function App() {
    const [isActive, toggleMenu] = useState(false)

    useEffect(() => {
        Events.scrollEvent.register('end', function (to, element) {
            element.scrollIntoView({block: "center", behavior: "smooth"})
        });
    }, [])

    return (
        <div className={`App ${isActive && `open-menu`}`} id="containerElement">
            <Header isActive={isActive} toggleMenu={toggleMenu}/>
            <Main/>
            <Skills/>
            <Projects/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;
