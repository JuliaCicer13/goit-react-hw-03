import styles from './Feedback.module.css';

export default function Feedback ({good, neutral, bad, total, positive}) {
       
        return (
            <>
            <ul className = {styles.list}>
            <li className={styles.wrap}>
               Good:{good}
            </li>
            <li className={styles.wrap}>
                Neutral:{neutral} 
            </li>
            <li className={styles.wrap}>
                Bad:{bad} 
                </li>
                <li className={styles.wrap}>
                    Total Feedback: {total}
                </li>
                <li className={styles.wrap}>Positive Feedback: {positive}%</li>
         </ul>
            </>
        )
       }





