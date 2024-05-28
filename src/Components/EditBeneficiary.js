import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { editBeneficiary } from '../redux/bs';
import { useNavigate, useParams } from 'react-router-dom';

const countries = ["USA", "Canada", "UK", "Australia", "Germany"];

const EditBeneficiary = () => {
  const { id } = useParams();
  const beneficiary = useSelector(state => state.beneficiaries.beneficiaries.find(b => b.id === parseInt(id)));
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: beneficiary
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = data => {
    dispatch(editBeneficiary({ ...data, id: parseInt(id) }));
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
      <button type="submit">Edit Beneficiary</button>
    </form>
  );
};

export default EditBeneficiary
