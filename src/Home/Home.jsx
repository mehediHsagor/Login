import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Link } from "react-router-dom";


const Home = () => {
    const{ user,  logOut}=useContext(AuthContext);
    const handlelogout=()=>{
        logOut()
        
        .then(()=>{
            console.log("logOut");

        })
        .catch(error=>{
            console.log(error);
        });
    }
    return (
        <div>
            <h1> this is a Home page{user&&<span>{user.displayName}</span>}</h1>
            {
                user ? <span>{user.email}  <button onClick={handlelogout}>SignOut</button></span>
                :<Link to="/login">LogIN</Link>
            }
        </div>
    );
};

export default Home;