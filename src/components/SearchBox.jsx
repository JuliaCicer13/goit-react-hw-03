import { useId, useState } from "react";
import styles from './SearchBox.module.css';

export default function SearchBox () {
  const labelFieldId = useId();

  const [inputValue, setInputValue] = useState("");
  
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  }
  return(
    <div className={styles.wrap}>
      <label className={styles.label} htmlFor={labelFieldId}>Find the contacts by name</label>
        <input className={styles.input} type="text" value={inputValue} onChange={handleChange} />
        <p>{inputValue}</p>
    </div>
  )
}