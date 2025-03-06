import UserCard from "./UserCard.jsx";

export default function UserList({list}) {
     return (
        <ul>
            {list.map(user =>(
             <UserCard 
               key={user.id}
               name={user.name}
               age={user.age}
               city={user.city}
             />
            ))}
        </ul>
     )
}