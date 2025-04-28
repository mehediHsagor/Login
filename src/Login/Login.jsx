import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";


const Login = () => {
  const {SignIn}=useContext(AuthContext);
    const loginaddhandle=(event)=>{
       event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const user={email,password};
        console.log(user);
        SignIn(email,password)
        .then(result=>{
          const loggeduser=result.users;
          console.log(loggeduser)
        })
        .catch(error=>{

          console.log(error)
        }
          
          )
    }
    return (
        
   <div>
     
    <h1>please LogIn</h1>
    <form onSubmit={loginaddhandle}>
       Email: <input type="email"name="email"placeholder="Enter your email"required></input><br/>
       Password: <input type="password"name="password"placeholder="Enter your password"required></input><br/>
        <Link to="/register">Forget password?</Link><br/>
        <input type="Submit"value="LogIn"></input>

    </form>
  </div>
 
    );
};

export default Login;