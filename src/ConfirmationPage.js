import React, { useEffect, useState } from 'react';
import './ConfirmationPage.css'; // Ensure you have this import for the styles

const ConfirmationPage = () => {
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        // Get the selected doctor from local storage
        const selectedDoctor = localStorage.getItem('selectedDoctor');
        if (selectedDoctor) {
            setDoctor(JSON.parse(selectedDoctor));
        }
    }, []);

    if (!doctor) {
        return <div>Loading...</div>; // Loading message if doctor data is not available
    }

    return (
        <div className="confirmation-page">
            <h1>Appointment Confirmation</h1>
            <h2>Thank you for booking an appointment!</h2>
            <div className="doctor-details">
                <img 
                    src={doctor.photo} 
                    alt={`${doctor.name}`} 
                    className="doctor-photo"
                />
                <h3>Doctor Details:</h3>
                <p><strong>Name:</strong> {doctor.name}</p>
                <p><strong>Specialty:</strong> {doctor.specialty}</p>
                <p><strong>Availability:</strong> {doctor.availability}</p>
                <p><strong>Email:</strong> {doctor.email}</p>
                <p><strong>Experience:</strong> {doctor.experience} years</p>
                <p><strong>Stars:</strong> {"★".repeat(doctor.stars)}</p>
                <p>Your appointment has been successfully booked.</p>
            </div>
        </div>
    );
};

export default ConfirmationPage;
