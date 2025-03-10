import styles from './ContactList.module.css';
import Contacts from './Contacts.jsx';
export default function ContactList ({users}) {
    return (
        <ul className={styles.list}>
          {users.map(user => (
           <Contacts
           key={user.id}
           name={user.name}
           number={user.number}
          />
          ))}
        </ul>
    )
}