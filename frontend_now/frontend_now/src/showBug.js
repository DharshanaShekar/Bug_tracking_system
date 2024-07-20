import React, { useState } from 'react';
import Sidebar from './sidebar';
import './bugform.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ShowBugs=(props)=>{
    const navigate = useNavigate();
        const [bugObject, setBugObject] = useState(props.bug || {
            name: '',
            details: '',
            steps: '',
            priority: '',
            assigned: '',
            version: ''
        });
        function inputChanged(e){
            setBugObject({
                ...bugObject,
                [e.target.name]:e.target.value
            })
        }
        async function submitForm(e) {
            e.preventDefault();
            try {
                axios.defaults.baseURL = 'http://localhost:3500';
                const response = await axios.post("/bugs", bugObject); // Updated URL to match backend route
                console.log(response);
                navigate('/viewbugs');
            } catch (error) {
                console.error(error);
            }
        }
    return(
        <div>
            <Sidebar/>
        <div className='bug-create'>
                {props.title === "Edit Bug" && <button className='close-btn' onClick={props.close}>Close </button>}
                <h1>Create Bug</h1>
                <form onSubmit={submitForm}>
                    <label>Name:</label>
                    <input name='name' placeholder='Bug Name' required onChange={inputChanged} value={bugObject.name}></input>
                    <label>Details:</label>
                    <textarea name='details' placeholder='Detailed description on the bug' required onChange={inputChanged} value={bugObject.details}></textarea>
                    <label>Steps: </label>
                    <textarea name='steps' placeholder='Steps to recreate the bug' required onChange={inputChanged} value={bugObject.steps}></textarea>
                    <label>Priority:</label>
                    <select name='priority' required onChange={inputChanged} value={bugObject.priority}>
                        <option value='1'>High</option>
                        <option value='2'>Mid</option>
                        <option value='3'>Low</option>
                    </select>
                    <label>Assigned</label>
                    <select name='assigned' onChange={inputChanged} value={bugObject.assigned}>
                        <option>Dharshana</option>
                        <option>Harshini</option>
                    </select>
                    <label>Application Version:</label>
                    <input name='version' placeholder='Application Version' onChange={inputChanged} value={bugObject.version}></input>
                    <br/>
                    <button type='submit'>Create Bug</button>
                </form>
            </div>
            </div>
    );
}

export default ShowBugs;