import LoginForm from './LoginForm.jsx';
import SearchBar from './SearchBar.jsx';
import LangSwitcher from './LangSwitcher.jsx';
import { useState } from 'react';

export default function App () {
  const [lang, setLang] = useState("en");
  const [coffeeSize, setCoffeeSize] = useState("sm");
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleChange = (evt) => {
    setHasAccepted(evt.target.checked);
  };

  const handleLogin = (userData) => {
    console.log(userData);
  }

  const handleSizeChange = (evt) => {
    setCoffeeSize(evt.target.value);
  };
 
  return (
    <>
    <div>
      <label>
        <input   type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={handleChange} /> 
				I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button>
    </div>
          <label>
        <input 
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === "sm"}
          onChange={handleSizeChange}
        />
  
        Small
      </label>
      <label>
        <input 
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === "sm"}
          onChange={handleSizeChange}
        />
        
        Meduim
      </label>
      <label>
        <input 
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={coffeeSize === "lg"} />
               onChange={handleSizeChange}
        Large
      </label>
     <LoginForm  onLogin={handleLogin}/>
     <SearchBar/>
     <p>Selected language: {lang}</p>
     <LangSwitcher value={lang} onSelect={setLang}/>
    </>
      
  );
};

  