import React, { useState } from 'react';
import { db, storage } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';

function EmployeeForm({ setEmployees }) {
  const [formData, setFormData] = useState({
    name: '', surname: '', email: '', position: '', department: '', phoneNumber: '', image: null, startDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'employees'), formData);
    
    // Upload image to Firebase Storage
    if (formData.image) {
      const imageRef = ref(storage, `employees/${docRef.id}`);
      await uploadBytes(imageRef, formData.image);
    }

    setEmployees(prev => [...prev, { id: docRef.id, ...formData }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="text" name="surname" placeholder="Surname" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="text" name="position" placeholder="Position" onChange={handleChange} />
      <input type="text" name="department" placeholder="Department" onChange={handleChange} />
      <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
      <input type="date" name="startDate" placeholder="Start Date" onChange={handleChange} />
      <input type="file" name="image" onChange={handleImageChange} />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
