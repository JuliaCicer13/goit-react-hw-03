import styles from './Options.module.css';

export default function Options ({updateFeedback, resetFeedback, showReset}) {
   
    return (
        
        <div className={styles.buttons}>
           <button className={styles.buttonGood} onClick={() => updateFeedback('good')}>Good</button>
           <button className={styles.buttonNeutral} onClick={() => updateFeedback ('neutral')}>Neutral</button>
           <button className={styles.buttonBad} onClick={() => updateFeedback ('bad')}>Bad</button>
         {showReset && (
            <button 
            className={styles.buttonReset} onClick={() => resetFeedback ('reset')}>Reset</button>)}  
        </div>
    );
}