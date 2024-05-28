import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBeneficiary } from '../redux/bs';
import { useNavigate, useParams } from 'react-router-dom';

const RemoveBeneficiary = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = () => {
    dispatch(removeBeneficiary(parseInt(id)));
    navigate('/');
  };

  return (
    <div>
      <h2>Remove Beneficiary</h2>
      <p>Are you sure you want to remove this beneficiary?</p>
      <button onClick={handleRemove}>Yes</button>
      <button onClick={() => navigate('/')}>No</button>
    </div>
  );
};

export default RemoveBeneficiary;
