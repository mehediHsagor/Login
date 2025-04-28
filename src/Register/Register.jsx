import { useContext } from "react";
import { AuthContext } from "../AuthProvider";


const Register = () => {
    const {user,   createUser}=useContext(AuthContext);

        console.log(user);
        console.log(createUser);
    
    const handleregister=(event)=>{

        event.preventDefault();
         const form=event.target;
         const name=form.name.value;
         const email=form.email.value;
         const password=form.password.value;
         console.log(name,email,password);
         createUser(email,password)
          .then(result=>{
            const loggeduser=result.user;
            console.log(loggeduser);
            form.reset("")
         })
         .catch(error=>{

            console.log(error);
         })

    }
    return (
        <div>
            <form onSubmit={handleregister}>
                name:<input type="text"name="name"placeholder="Enter your Name"required></input><br/>
              Email: <input type="email"name="email"placeholder="Enter your email"required></input><br/>
              Password: <input type="password"name="password"placeholder="Enter your password"required></input><br/>
              <h4>Already Have an account?</h4>
              <input type="submit"value="Login"></input>
            </form>
        </div>
    );
};

export default Register;