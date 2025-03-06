
export default function UserCard ({name, age, city}) {
    return (
        <>  
        <li>
           <h2>User Card</h2>
           <p>Name:{name}</p>
           <p>Age:{age}</p>
           <p>City:{city}</p>
        </li>
        </>
    )
}