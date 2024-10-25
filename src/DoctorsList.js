// src/DoctorsList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctorsList.css';

const DoctorsList = () => {
    const navigate = useNavigate();

    const doctors = [
        {
            name: 'Dr. John Doe',
            specialty: 'Psychiatrist',
            email: 'johndoe@example.com',
            yearsExperience: 10,
            availability: 'Mon, Wed, Fri',
            photo: 'https://via.placeholder.com/100',
            stars: 5, // Add stars for the rating
        },
        {
            name: 'Dr. Jane Smith',
            specialty: 'Therapist',
            email: 'janesmith@example.com',
            yearsExperience: 8,
            availability: 'Tue, Thu',
            photo: 'https://via.placeholder.com/100',
            stars: 4,
        },
        {
            name: 'Dr. Emily Johnson',
            specialty: 'Counselor',
            email: 'emilyj@example.com',
            yearsExperience: 5,
            availability: 'Mon, Tue',
            photo: 'https://via.placeholder.com/100',
            stars: 3,
        },
        {
            name: 'Dr. Michael Brown',
            specialty: 'Clinical Psychologist',
            email: 'michaelb@example.com',
            yearsExperience: 12,
            availability: 'Wed, Fri',
            photo: 'https://via.placeholder.com/100',
            stars: 5,
        },
        {
            name: 'Dr. Sarah Wilson',
            specialty: 'Child Psychologist',
            email: 'sarahw@example.com',
            yearsExperience: 7,
            availability: 'Thu, Sat',
            photo: 'https://via.placeholder.com/100',
            stars: 4,
        },
        {
            name: 'Dr. David Lee',
            specialty: 'Addiction Specialist',
            email: 'davidl@example.com',
            yearsExperience: 9,
            availability: 'Mon, Thu',
            photo: 'https://via.placeholder.com/100',
            stars: 5,
        },
        {
            name: 'Dr. Linda Green',
            specialty: 'Family Therapist',
            email: 'lindag@example.com',
            yearsExperience: 6,
            availability: 'Tue, Fri',
            photo: 'https://via.placeholder.com/100',
            stars: 3,
        },
    ];

    const handleDoctorClick = (doctor) => {
        // Save selected doctor to local storage
        localStorage.setItem('selectedDoctor', JSON.stringify(doctor));
        navigate('/confirmation'); // Navigate to the confirmation page
    };

    return (
        <div className="doctors-list-container">
            <h2 className="title">Doctors List</h2>
            <div className="doctors-grid">
                {doctors.map((doctor, index) => (
                    <div 
                        key={index} 
                        className="doctor-card" 
                        onClick={() => handleDoctorClick(doctor)}
                    >
                        <img src={doctor.photo} alt={doctor.name} className="doctor-photo" />
                        <h3 className="doctor-info">{doctor.name}</h3>
                        <p className="doctor-info">{doctor.specialty}</p>
                        <p className="doctor-info">{doctor.yearsExperience} years experience</p>
                        <p className="doctor-info">Availability: {doctor.availability}</p>
                        <p className="doctor-info">Email: {doctor.email}</p>
                        <p className="doctor-info">Stars: {"★".repeat(doctor.stars)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorsList;
