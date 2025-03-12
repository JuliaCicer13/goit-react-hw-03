import styles from './ContactList.module.css';
import Contacts from '../Contacts/Contacts.jsx';
export default function ContactList ({users, onDelete}) {
    return (
        <ul className={styles.list}>
          {users.map(user => (
           <Contacts
           key={user.id}
           id={user.id}
           name={user.name}
           number={user.number}
           onDelete={onDelete}
          />
          ))}
        </ul>
    )
}