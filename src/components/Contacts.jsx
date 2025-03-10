import styles from './Contacts.module.css';

export default function Contacts ({name, number}) {
 return (
  <li className={styles.item}>
    <div className={styles.container}>
    <p className={styles.name}>{name}</p>
    <p className={styles.number}>{number}</p> 
    </div>
   
    <button className={styles.button} type='submit'>Delete</button> 
  </li>
        )
}