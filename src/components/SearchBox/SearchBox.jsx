import { useId} from "react";
import styles from './SearchBox.module.css';

export default function SearchBox ({value, onChange}) {
  const labelFieldId = useId();
  
  return(
    <div className={styles.wrap}>
      <label className={styles.label} htmlFor={labelFieldId}>Find the contacts by name</label>
        <input 
        className={styles.input}
        type="text" 
        value={value}
        onChange={onChange}
         />
    </div>
  )
}