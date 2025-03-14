import styles from './Contacts.module.css';
import { GiVampireCape, GiFangs } from "react-icons/gi";

export default function Contacts ({id, name, number, onDelete}) {
 return (
  <li className={styles.item}>
    <div className={styles.container}>
    <p className={styles.name}><GiVampireCape className={styles.info}/> {name}</p>
    <p className={styles.number}> <GiFangs className={styles.icon}/> {number}</p> 
    </div>
   
    <button onClick={() =>
      onDelete(id)} className={styles.button} type='submit'>Delete</button> 
  </li>
        )
}