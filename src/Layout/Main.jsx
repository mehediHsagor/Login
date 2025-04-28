
import {Link, Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>

<div>
          


<Link  className="btn btn-ghost text-xl" to="/home">Home</Link>
<Link  className="btn btn-ghost text-xl" to="/order">Order</Link>

  <Link  className="btn btn-ghost text-xl" to="/logIn">LogIN</Link>
  <Link  className="btn btn-ghost text-xl" to="/register">register</Link>


</div>
      
        <Outlet></Outlet>
        </div>
        
        
      
    );
};

export default Main;