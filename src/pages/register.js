import React, { Component } from 'react';
import { 
    Link
 } from 'react-router-dom';

function Register(){
    return(
<div style={{marginTop: '10%'}}>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
  <link rel="stylesheet" href="main.css" />
  <style dangerouslySetInnerHTML={{__html: "\n        body {\n            background-color: #303641;\n        }\n    " }} />
  <div id="container-login">
    <div id="title">
      <i className="material-icons lock" style={{color :"white" }}>lock</i> <span style={{color :"white" }}>Register</span>
    </div>
    <form>
      <div className="input">
        <div className="input-addon">
          <i className="material-icons">face</i>
        </div>
        <input id="username" placeholder="Username" type="text" required className="validate" autoComplete="off" />
      </div>
      <div className="clearfix" />
      <div className="input">
        <div className="input-addon">
          <i className="material-icons">vpn_key</i>
        </div>
        <input id="password" placeholder="Password" type="password" required className="validate" autoComplete="off" />
      </div>
      <div className="remember-me">
        <input type="checkbox" />
        <span style={{color: '#DDD'}}>Remember Me</span>
      </div>
      <input type="submit" defaultValue="Log In" />
    </form>
    <div className="forgot-password">
      <a href="#">Do You have Account?</a>
    </div> 
    <div className="register">
      <Link to="/login"><button id="register-link">Login here</button></Link>
    </div>
  </div>
</div>
    );
}
export default Register;