import styles from './Counter.module.css';
import {useState} from 'react';

export default function Counter () {
    const [count, setCount] =
    useState(0)
       return(
        <>
        <p>
            Количство нажатий:{count}
        </p>
            <button className={styles.button} onClick={() =>setCount(count +1)}>Нажми меня</button>
            <button className={styles.button} onClick={() =>setCount(count - 1)}>Назад</button>
        </>
          
       )
    
}