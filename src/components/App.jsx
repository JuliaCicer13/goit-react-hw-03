import ContactForm from './ContactForm.jsx';
import ContactList from './ContactList.jsx';
import Contacts from './Contacts.jsx';
import SearchBox from './SearchBox.jsx';
import { useState } from 'react';

export default function App () {
  const [ values, setValues ] = useState(
    [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]
    );
  
  const handleClick = () => {
    // clicks = clicks + 1;
		setValues(values + 1);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onClick={handleClick}/>
      <ContactList />     
      <Contacts/>
      <SearchBox/>
   
    </>
      
  );
};

  