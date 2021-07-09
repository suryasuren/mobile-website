import React from 'react';
import './form-style.css'
const SelectGender = ({ name, value, handleChange }) => (
    <select className="genderClass form-control" name={name} value={value} onChange={handleChange}>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Others">Others</option>
    </select>
  )

  export default SelectGender;