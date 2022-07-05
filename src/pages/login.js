import {useContext} from 'react';
import { 
    Link,
    useNavigate
 } from 'react-router-dom';
import { appContext } from '../App';
function Login(){
  const Context = useContext(appContext);
  let navigasi = useNavigate()
  const loginClick = async(e) =>{
    e.preventDefault();
    let u = e.target.username.value;
    let p = e.target.passwd.value;
    let cek_login = await fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      
                      username: u,
                      password: p,
                      // expiresInMins: 60, // optional
                    })
                  })
                  .then(res => res.json())
                  .then(hasil => {return hasil});

                  if(cek_login.username === undefined){
                    alert('Login gagal. Username atau Password Salah');
                  }else{
                   Context.setPengguna(cek_login);
                   navigasi('/');
                  }
  }
    return(
<div style={{marginTop: '10%'}}>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
  <link rel="stylesheet" href="main.css" />
  <style dangerouslySetInnerHTML={{__html: "\n        body {\n            background-color: #303641;\n        }\n    " }} />
  <div id="container-login">
    <div id="title">
      <i className="material-icons lock" style={{color :"white" }}>lock</i> <span style={{color :"white" }}>Login</span>
    </div>
    <form onSubmit={loginClick}>
      <div className="input">
        <div className="input-addon">
          <i className="material-icons">face</i>
        </div>
        <input id="username" name='username' placeholder="Username" type="text" required className="validate" autoComplete="off" />
      </div>
      <div className="clearfix" />
      <div className="input">
        <div className="input-addon">
          <i className="material-icons">vpn_key</i>
        </div>
        <input id="password" placeholder="Password" type="password" name='passwd' required className="validate" autoComplete="off" />
      </div>
      <div className="remember-me">
        <input type="checkbox" />
        <span style={{color: '#DDD'}}>Remember Me</span>
      </div>
      <input type="submit" defaultValue="Log In" />
    </form>
    <div className="forgot-password">
      <a href="#">Forgot your password?</a>
    </div> 
    <div className="register">
      <Link to="/signup"><button id="register-link">Register here</button></Link>
    </div>
  </div>
</div>
    );
}
export default Login;