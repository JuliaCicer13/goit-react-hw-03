import styles from './Contacts.module.css';
import { FaPhone } from 'react-icons/fa';
import { GiCat } from 'react-icons/gi';

export default function Contacts ({name, number}) {
 return (
  <li className={styles.item}>
    <div className={styles.container}>
    <p className={styles.name}><GiCat className={styles.info}/> {name}</p>
    <p className={styles.number}> <FaPhone className={styles.icon}/> {number}</p> 
    </div>
   
    <button className={styles.button} type='submit'>Delete</button> 
  </li>
        )
}