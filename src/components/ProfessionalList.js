import React, { useState } from 'react';

const ProfessionalList = () => {
  const [professionals] = useState([
    { id: 1, name: 'Dr. Anil Kumar', specialization: 'Psychologist' },
    { id: 2, name: 'Dr. Sneha Kapoor', specialization: 'Therapist' },
    { id: 3, name: 'Dr. Ravi Shankar', specialization: 'Psychiatrist' }
  ]);

  return (
    <div>
      <h3>Available Mental Health Professionals</h3>
      <ul>
        {professionals.map(pro => (
          <li key={pro.id}>
            {pro.name} - {pro.specialization}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfessionalList;
