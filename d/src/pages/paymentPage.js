import { useParams } from "react-router-dom";
import React, { useState } from "react";

const PaymentPage = () => {
  const params = useParams();
  const inputRef = React.createRef();
  const [text, setText] = useState("");

  const handleClick = () => {
    console.log("value===", inputRef.current.value);
  };

  const handleChange = (text) => {
    //console.log('text ===', text)
    setText("text ===", text);
  };
  return (
    <div>
      <h1>Payment Page -{params.price}</h1>
      <br />
      <div>
        <input type="text" ref={inputRef} /> {/**Uncontrolled Components */}
        <button onClick={() => handleClick()}> Click me </button>
      </div>
      <div>
        {/**Controlled Components */}
        <input
          type="text"
          value={text}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PaymentPage;

// const PaymentPage = () => {
//   const params = useParams();
//   //console.log("params", params)
//   return <h1>Payment Page -{params.price}</h1>;
// };

// export default PaymentPage;
