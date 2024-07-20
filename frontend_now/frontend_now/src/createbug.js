import React, { useState } from 'react';
import Sidebar from './sidebar';
import './bugform.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const CreateBugs=(props)=>{
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
                const response = await axios.post("/bugs", bugObject); 
                console.log(response);
                navigate('/viewbugs');
            } catch (error) {
                console.error(error);}
        }
    return(<div><Sidebar/>
        <div className='bug-create'>
                {props.title === "Edit Bug" && <button className='close-btn' onClick={props.close}>Close </button>}
                <h1>Create Bug</h1>
                  <form onSubmit={submitForm}><label>Name:</label>
                    <input name='name' placeholder='Bug Name' required onChange={inputChanged} value={bugObject.name}></input>
                    <label>Details:</label>
           <textarea name='details' placeholder='Detailed description on the bug' required onChange={inputChanged} value={bugObject.details}></textarea>
                    <label>Steps: </label>
           <textarea name='steps' placeholder='Steps to recreate the bug' required onChange={inputChanged} value={bugObject.steps}></textarea>
                    <label>Priority:</label><select name='priority' required onChange={inputChanged} value={bugObject.priority}>
                        <option value='high'>High</option>
                        <option value='medium'>Mid</option>
                        <option value='low'>Low</option>
                    </select><label>Assigned</label>
       <select name='assigned' onChange={inputChanged} value={bugObject.assigned}>
                        <option>Dharshana</option>
                        <option>Harshini</option>
                        <option>Mythili</option>
                    </select><label>Application Version:</label>
                    <input name='version' placeholder='Application Version' onChange={inputChanged} value={bugObject.version}></input>
                    <br/><button type='submit'>Create Bug</button>
                </form></div></div>);
}
export default CreateBugs;
