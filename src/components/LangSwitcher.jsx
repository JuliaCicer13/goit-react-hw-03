import { useId } from "react";

export default function LangSwitcher(value, onSelect) {
    const selectId = useId();
    return(
        <div>
            <label htmlFor={selectId}>Choose language</label>
            <select 
             id={selectId}
             value={value}
             onChange={(evt) => onSelect(evt.target.value)}
            >
              <option value="en">English</option>
              <option value="uk">Ukranian</option>
              <option value="japan">Japan</option>
            </select>
        </div>
    )
}