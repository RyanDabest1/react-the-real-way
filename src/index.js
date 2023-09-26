import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const main = ReactDOM.createRoot(document.getElementById('main'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const Page = (
  <div>
    <h1>Hello There!</h1>
    <p>My name's Ryan I'm going to become the best in the field of IT!!</p>
    <p>Currently Site's under construction</p>
  </div>
)

main.render(
  Page
)
console.log(Page)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
