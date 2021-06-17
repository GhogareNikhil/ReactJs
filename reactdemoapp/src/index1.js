import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const flname = "Nikhil ";
const lname = "Ghogare";

ReactDOM.render(
    <h1>my name is{ '${flname} ${lname}'}</h1>,

    document.getElementById('root')
);