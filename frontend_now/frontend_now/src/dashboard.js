import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import axios from 'axios';
import { Card } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css'

const Dashboard = () => {
    const navigate=useNavigate();
    const [bugCounts, setBugCounts] = useState({ high: 0, medium: 0, low: 0 });

    useEffect(() => {
        const fetchBugCounts = async () => {
            try {
                const response = await axios.get('http://localhost:3500/bugs/count');
                const { high, medium, low } = response.data;
                
                setBugCounts({ high, medium, low });
            } catch (error) {
                console.error('Error fetching bug counts:', error);
            }
        };

        fetchBugCounts();
    }, []);
    

    const handleCardClick = async (priority) => {
        try {
            const response = await axios.get(`http://localhost:3500/bugs/${priority}`);
            // Handle response, maybe display bugs in a modal or another component
            console.log('Bugs:', response.data);
            const bugs = response.data;
            navigate(`/bugs/${priority}`, { state: { bugs } });
        } catch (error) {
            console.error('Error fetching bugs:', error);
        }
        
    };

    return (
        <div className='dashboard-container'>
            <Sidebar />
            <div className='dashboard-cards'>
                    <Card onClick={() => handleCardClick('high')}>
                        <Card.Content style={{ backgroundColor: '#333a36' }}>
                            <Card.Header style={{ color: 'white' }}>High Priority</Card.Header>
                            <Card.Description style={{ color: 'white' }}>{bugCounts.high} Bugs</Card.Description>
                        </Card.Content>
                    </Card>
                    <Card onClick={() => handleCardClick('medium')}>
                        <Card.Content style={{ backgroundColor: '#333a36' }}>
                            <Card.Header style={{ color: 'white' }}>Medium Priority</Card.Header>
                            <Card.Description style={{ color: 'white' }}>{bugCounts.medium} Bugs</Card.Description>
                        </Card.Content>
                    </Card>
                    <Card onClick={() => handleCardClick('low')}>
                        <Card.Content style={{ backgroundColor: '#333a36'}}>
                            <Card.Header style={{ color: 'white' }}>Low Priority</Card.Header>
                            <Card.Description style={{ color: 'white' }}>{bugCounts.low} Bugs</Card.Description>
                        </Card.Content>
                    </Card>
                    </div>
                </div>
    );
}

export default Dashboard;
