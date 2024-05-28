import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addBeneficiary } from '../redux/bs';
import { useNavigate } from 'react-router-dom';

const countries = ["USA", "Canada", "UK", "Australia", "Germany"];

const AddBeneficiary = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = data => {
    const newBeneficiary = { ...data, id: Date.now() };
    dispatch(addBeneficiary(newBeneficiary));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Full Name</label>
        <input {...register('fullName', { required: true })} />
        {errors.fullName && <span>This field is required</span>}
      </div>
      <div>
        <label>Address</label>
        <input {...register('address', { required: true })} />
        {errors.address && <span>This field is required</span>}
      </div>
      <div>
        <label>Country</label>
        <select {...register('country', { required: true })}>
          {countries.map(country => <option key={country} value={country}>{country}</option>)}
        </select>
        {errors.country && <span>This field is required</span>}
      </div>
      <div>
        <label>Pincode</label>
        <input {...register('pincode', { required: true })} />
        {errors.pincode && <span>This field is required</span>}
      </div>
      <button type="submit">Add Beneficiary</button>
    </form>
  );
};

export default AddBeneficiary;
