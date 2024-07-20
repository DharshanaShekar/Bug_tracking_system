import React, { useState } from 'react';
import { Card, Button, Grid, Modal } from 'semantic-ui-react';
import axios from 'axios';
import './bugCard.css';

const BugCard = ({ bug, onDelete, onUpdate }) => {
    const [open, setOpen] = useState(false); // State to manage the modal open/close
    const [updatedBug, setUpdatedBug] = useState(bug); // State to manage the updated bug data
    const [mode, setMode] = useState('Edit');

    const handleEdit = () => {
        setOpen(true); // Open the modal for editing when "Edit" button is clicked
        setUpdatedBug(bug); // Set the initial bug data for editing
        setMode('Edit Bug');
    };

    const handleDelete = async () => {
        try {
            console.log(bug._id);
            await axios.delete(`http://localhost:3500/bugs/${bug._id}`); // Send a delete request to the backend
            onDelete(bug._id); // Call the onDelete function to remove the bug from the UI
        } catch (error) {
            console.error('Error deleting bug:', error);
        }
    };
    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:3500/bugs/${updatedBug._id}`, updatedBug); // Send a put request to update the bug
            setOpen(false); // Close the modal after saving changes
            onUpdate(updatedBug); // Call the onUpdate function to update the bug in the UI
        } catch (error) {
            console.error('Error updating bug:', error);
        }
    };

    const handleChange = (e) => {
        setUpdatedBug({
            ...updatedBug,
            [e.target.name]: e.target.value
        });
    };

    const handleCardClick = ()=>{
        setOpen(true);
        setUpdatedBug(bug); // Set the initial bug data for viewing
        setMode('View Bug');
    }
    return (
        <Grid.Column width={5}>
            <Card style={{ backgroundColor: '#333a36',width:'900px'}} >
                <Card.Content style={{ backgroundColor: '#333a36' , color:'white',fontSize:'1.5remS'}}> 
                    <Card.Header style={{color:'white'}}>{bug.name}</Card.Header>
                    <Card.Description style={{color:'white'}}>
                        Details: {bug.details}
                    </Card.Description>
                    <Card.Description style={{color:'white'}}>
                        Steps: {bug.steps}
                    </Card.Description>
                    <Card.Description style={{color:'white'}}>
                        Priority: {bug.priority}
                    </Card.Description>
                    <Card.Description style={{color:'white'}}>
                        Assigned: {bug.assigned}
                    </Card.Description>
                    <Card.Description style={{color:'white'}}>
                        Version: {bug.version}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui three buttons'>
                        <Button  style={{ backgroundColor: '#159e40', color: 'white' }} onClick={()=>handleEdit()}>Edit</Button>
                        <Button  style={{ backgroundColor: '#ef6c57', color: 'white' }} onClick={handleDelete}>Delete</Button>
                    </div>
                </Card.Content>
            </Card>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                className='edit-options'
                style={{ backgroundColor: 'white' }}
            >
                <Modal.Header className='col' style={{ backgroundColor: '#333a36' , color:'white'}}>
                Edit Bugs
                </Modal.Header>
                <Modal.Content style={{ backgroundColor: '#333a36' , color:'white'}}>
                    <Modal.Description>
                        <label>Name:</label>
                        <input name='name' value={updatedBug.name} onChange={handleChange}></input>
                        <label>Details:</label>
                        <textarea name='details' value={updatedBug.details} onChange={handleChange}></textarea>
                        <label>Steps: </label>
                    <textarea name='steps'  onChange={handleChange} value={updatedBug.steps}></textarea>
                    <label>Priority:</label>
                    <select name='priority' onChange={handleChange} value={updatedBug.priority}>
                        <option value='high'>High</option>
                        <option value='medium'>Mid</option>
                        <option value='low'>Low</option>
                    </select>
                    <label>Assigned</label>
                    <select name='assigned' onChange={handleChange} value={updatedBug.assigned}>
                        <option>Dharshana</option>
                        <option>Harshini</option>
                        <option>Mythili</option>
                    </select>
                    <label>Application Version:</label>
                    <input name='version' onChange={handleChange} value={updatedBug.version}></input>
                    <br/>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions style={{ backgroundColor: '#333a36' }}>
                    <Button style={{ backgroundColor: '#ef6c57', color: 'white' }} onClick={() => setOpen(false)}>Cancel</Button>
                    <Button style={{ backgroundColor: '#ef6c57', color: 'white' }} color='white'onClick={handleSave}>Save</Button>
                </Modal.Actions>
            </Modal>
        </Grid.Column>
    );
};

export default BugCard;