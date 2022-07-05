
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import {useState, useEffect} from "react";
function MainLayout({children}){
    const [user, setUser] = useState([]);
    useEffect(()=>{
        const UserData = async () => {
            fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(json => setUser(json.users));
        }
        UserData();
    },[])
    
    return(
        <>
            <Header data = {user}/>
                <div>
                    {children }
                </div>
            <Footer/>
        </>
    );
}

export default MainLayout;