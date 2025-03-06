import LoginForm from './LoginForm.jsx';
import SearchBar from './SearchBar.jsx';
import LangSwitcher from './LangSwitcher.jsx';
import { useState } from 'react';

export default function App () {
  const [lang, setLang] = useState("en");

  const handleLogin = (userData) => {
    console.log(userData);
  }
 
  return (
    <>
     <LoginForm  onLogin={handleLogin}/>
     <SearchBar/>
     <p>Selected language: {lang}</p>
     <LangSwitcher value={lang} onSelect={setLang}/>
    </>
      
  );
};

  