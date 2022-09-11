import React from 'react';
import ReactDOM from 'react-dom/client';
import HeadingComponentFunctional from './HeadingComponentFunctional'
import HeadingComponentUsingClass from './HeadingComponentUsingClass'
import FormComponent from './Form';
import List from "./List";
import Counter from './Counter';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

//functional component  //children Component
//current Component
const CurrentTime = () => {
  return(
    <p>
      {" "} 
      {+new Date()}--
      <HeadingComponentUsingClass title="Passed from CurrentTime" count="2"/>{" "}     
    </p>
  )
}

root.render(
  <React.StrictMode>
    <FormComponent/>
    <HeadingComponentFunctional title="Hello from component"/>
    <CurrentTime/>
    <Counter/>
    <List/>
  </React.StrictMode>
);