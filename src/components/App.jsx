import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [users, setUsers] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : defaultContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (users.length === 0) {
      localStorage.setItem("contacts", JSON.stringify(defaultContacts)); // Если пусто, записываем дефолтный массив
      setUsers(defaultContacts);
    } else {
      localStorage.setItem("contacts", JSON.stringify(users));
    }
  }, [users]);

  const handleClick = (newContact) => {
    setUsers((prevUsers) => [...prevUsers, newContact]);
  };

  const handleChange = (evt) => {
    setFilter(evt.target.value.toLowerCase());
  };

  const handleDelete = (id) => {
    const audio = new Audio('/sounds/hiss.mp3');
    audio.play();

    setTimeout(() => {
      setUsers((prevUsers) => {
        const updatedUsers = prevUsers.filter(user => user.id !== id);
        return updatedUsers;
      });
    }, 500);
  };

  const filtredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter)
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleClick} />
      <SearchBox value={filter} onChange={handleChange} />
      <ContactList users={filtredUsers} onDelete={handleDelete} />
    </>
  );
}