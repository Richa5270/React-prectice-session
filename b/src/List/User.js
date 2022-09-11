import "./user.css";
const User = ({name, age, gender}) => {
  return (
    <div className="user-container">
      <div className="name"> {name} </div>
      <div className="details">
        <span>{age}</span>
        <span>{gender}</span>
      </div>
    </div>
  );
};

// const User = (props) => {
//   return (
//     <div className="user-container">
//       <div className="name"> {props.name} </div>
//       <div className="details">
//         <span>{props.age}</span>
//         <span>{props.gender}</span>
//       </div>
//     </div>
//   );
// };

export default User;
