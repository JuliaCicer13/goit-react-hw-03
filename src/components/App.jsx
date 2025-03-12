import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import { useState } from 'react';

export default function App () {
  const [ users, setUsers] = useState(
    [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]
    );

    const [filter, setFilter] =
    useState('');

  
  const handleClick = (newContatc) => {
		setUsers((prevUsers) =>
      [...prevUsers, newContatc]);
  };


    const handleChange = (evt) => {
      setFilter(evt.target.value.toLowerCase());
     }
     
     const deleteContact = (id) => {
      setUsers((prevUsers) => 
      prevUsers.filter(user => user.id !==
        id
      ));
     };

    const filtredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter));
 
 
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleClick}/>
      <SearchBox value = {filter} onChange={handleChange}/>
      <ContactList users={filtredUsers} onDelete={deleteContact}/>     
    </>
      
  );
};

  