import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        issue: '',
        insurance: '',
        location: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You can replace this with API call for signup
        navigate('/login'); // Redirect to login page after signup
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h1>Signup</h1>  {/* Existing subheading */}
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                    
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                    
                    <label>Age:</label>
                    <input 
                        type="number" 
                        name="age" 
                        value={formData.age} 
                        onChange={handleChange} 
                        required 
                    />
                    
                    <label>Issue:</label>
                    <input 
                        type="text" 
                        name="issue" 
                        value={formData.issue} 
                        onChange={handleChange} 
                        required 
                    />
                    
                    <label>Insurance:</label>
                    <input 
                        type="text" 
                        name="insurance" 
                        value={formData.insurance} 
                        onChange={handleChange} 
                        required 
                    />
                    
                    <label>Location:</label>
                    <input 
                        type="text" 
                        name="location" 
                        value={formData.location} 
                        onChange={handleChange} 
                        required 
                    />
                    
                    <label>Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                    
                    <button type="submit" className="signup-btn">Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
