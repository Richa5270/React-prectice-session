import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

//function component
const HeadingComponent = (props) => {
  return <h1>{props.title}</h1>;
} 

//class component
class HeadingComponentUsingClass extends React.Component{
  render(){
    return <h1>Class Component -{this.props.title}</h1>
  }
}

//functional component  //children Component
const CurrentTime = () => {
  return(
    <p>
      {" "} 
      {+new Date()}--  CurrentTime
      <HeadingComponentUsingClass title="Passed from CurrentTime" count="2"/>{" "}     
    </p>
  )
}

setInterval(()=>{
root.render(
  <React.StrictMode>
    <HeadingComponent title="Hello from component"/>
    <CurrentTime/>
  </React.StrictMode>
);
  },
1000)