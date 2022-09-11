import User from "./User";
import  "./style.css";
import UserList from "./user.json";

const ListComponent = ()=>{
    return (
        <div className="user-list">
            <h2>List Of Component</h2>
            {
                UserList.map(({name, age, gender} , index)=>( 
                    <User name={name} age={age} gender={gender}
                    key={index}
                    />
                ))}
        </div>
    );
};

// const ListComponent = ()=>{
//     return (
//         <div className="user-list">
//             <h2>List Of Component</h2>
//             {
//                 UserList.map((userData , index)=>( 
//                     <User name={userData.name} age={userData.age} gender={userData.gender}
//                     key={index}
//                     />
//                 ))}
//         </div>
//     );
// };
// const ListComponent = ()=>{
//     return (
//         <div className="user-list">
//             <h2>List Of Component</h2>
//             {
//                 UserList.map((userData)=>( 
//                     <User name={userData.name} age={userData.age} gender={userData.gender}
//                     key={userData.name}
//                     />
//                 ))}
//         </div>
//     );
// };

// const ListComponent = ()=>{
//     return (
//         <div className="user-list">
//             <h2>List Of Component</h2>
//             <User name="John Wick" age={35} gender="M"/>
//         </div>
//     );
// };

export default ListComponent;