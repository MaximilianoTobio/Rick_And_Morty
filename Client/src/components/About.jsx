import React from "react";
import inprogress from '../assets/img/inprogress.png';
import styles from './About.module.css';

export default function About(){
    return (
        <div>
            <img src={inprogress} alt="img" />
            <h1>About</h1>
        </div>
    )
};