import { useId } from "react";

export default function LoginForm({onLogin}) {
    const loginId = useId();
    const passwordId = useId();
  
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const {login, password}  = form.elements;
        onLogin({
           login: login.value,
           password: password.value,
        });
        console.log(login, password);
        console.log(login.value, password.value);
        form.reset();
    }
    return(
        <>
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" />

      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" />


      <button type="submit">Log in</button>
    </form>
        </>
    )
}