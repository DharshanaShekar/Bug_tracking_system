import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import BugCard from './bugCard';
import Sidebar from './sidebar';
import { Grid } from 'semantic-ui-react';
import './buglist.css';

const BugListPage = () => {
    const location = useLocation(); // Access location object using useLocation hook
    const bugs = location.state && location.state.bugs ? location.state.bugs : [];

    return (
        <>
            <Sidebar/>
            <div className='page-container'>
            <Grid columns={3}>
                {bugs.map(bug => (
                    <BugCard key={bug.id} bug={bug} />
                ))}
                </Grid>
                </div>
        </>
    );
};

export default BugListPage;
