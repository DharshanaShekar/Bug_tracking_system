import React from "react";
import { Link } from "react-router-dom";
import './sidebar.css';
import { useNavigate } from "react-router-dom";

const Sidebar=()=>{
    const navigate=useNavigate();
    const handleSignOut = () => { // Renamed the function to handleSignOut
        console.log("Sidebar");
        navigate('/');

    };
    return(
        <div className="sidebar">
            <Link className='nav-link' to="/"><h1 className='brand'>Bug-Tracker</h1></Link>
            <ul>
                <li><Link to='/view' className='nav-link'>Dashboard</Link></li>
                <li><Link to='/viewbugs' className='nav-link'>View Bugs</Link></li>
                <li><Link to='/create' className='nav-link'>Create Bug</Link></li>
            </ul>
            <button className='nav-link logout' onClick={handleSignOut}>Logout</button> 
        
        </div>
    );
}

export default Sidebar;