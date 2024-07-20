import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import axios from 'axios';
import { Grid } from 'semantic-ui-react';
import './buglist.css'; // Import the CSS file for bug list styling
import BugCard from './bugCard'

const ViewBugs = () => {
    const [bugs, setBugs] = useState([]);
    const handleDelete = (bugId) => {
        setBugs(bugs.filter(bug => bug._id !== bugId));
    };

    const handleUpdate = (updatedBug) => {
        setBugs(bugs.map(bug => (bug._id === updatedBug._id ? updatedBug : bug)));
    };
    useEffect(() => {
        const fetchBugs = async () => {
            try {
                const response = await axios.get('http://localhost:3500/bugs');
                setBugs(response.data);
            } catch (error) {
                console.error('Error fetching bugs:', error);
            }
        };

        fetchBugs();
    }, []);

    return (
        <>
            <Sidebar />
            <div className='page-container'>
            <Grid columns={3}>
                {bugs.map(bug => (
                    <BugCard key={bug._id} bug={bug} onDelete={handleDelete} onUpdate={handleUpdate}/>
                ))}
            </Grid>
            </div>
        </>
    );
}

export default ViewBugs;
