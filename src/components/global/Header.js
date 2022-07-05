import {
   Link,
   useNavigate   
  } from 'react-router-dom';
  import {useState, useEffect, useContext} from "react";
  import App, { appContext } from '../../App';
function Header(props) {
  const Context = useContext(appContext);
  let navigasi = useNavigate();  
  const [user, setUser] = useState([]);
  useEffect(()=>{
      const UserData = async () => {
          fetch('https://dummyjson.com/users')
          .then(res => res.json())
          .then(json => setUser(json.users));
      }
      UserData();
  },[])
        return (
            <div>
                <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
  <header id="header">
    <div className="d-flex flex-column">
      <div className="profile">
        <img src="/assets/img/profile-img.jpg" alt className="img-fluid rounded-circle" />
        {
                            props.data.filter(usr => usr.id === 1).map((usrFilter) => (
                                <h1 className="text-light"><a href="index.html">{usrFilter.firstName} {usrFilter.lastName}</a></h1>
                            ))
                        }
        <div className="social-links mt-3 text-center">
          <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
        </div>
      </div>
      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><Link to = "/" className="nav-link scrollto"><i className="bx bx-home" /> <span>Home</span></Link></li>
          <li><Link to = "/menu/about" className="nav-link scrollto"><i className="bx bx-user" /> <span>About</span></Link></li>
          <li><Link to = "/menu/resume" className="nav-link scrollto"><i className="bx bx-file-blank" /> <span>Resume</span></Link></li>
          <li><Link to = "/menu/portofolio" className="nav-link scrollto"><i className="bx bx-book-content" /> <span>Portfolio</span></Link></li>
          <li><Link to = "/menu/contact" className="nav-link scrollto"><i className="bx bx-envelope" /> <span>Contact</span></Link></li>
          {
            Context.pengguna ? (
              <>
              <div className="copyright">
                    <strong> Login Sebagai<br></br>{Context.pengguna.username} {Context.pengguna.lastName}</strong>
              </div>
              <p></p>
              </>
            ) : (
              <li><Link to = "/login" className="nav-link scrollto"><i className="bx bx-server" /> <span>Logout</span></Link></li>
            )
          }         
        </ul>
      </nav>{/* .nav-menu */}
    </div>
  </header>
            </div>

        );
    }

export default Header;