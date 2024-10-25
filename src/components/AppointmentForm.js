import React, { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    professional: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, send data to backend or display confirmation
    alert(`Appointment booked with ${formData.professional} on ${formData.date}`);
  }

  return (
    <div>
      <h3>Book an Appointment</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <br />
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <br />
        <label>Professional:</label>
        <input type="text" name="professional" value={formData.professional} onChange={handleChange} required />
        <br />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default AppointmentForm;
