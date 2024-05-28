import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ViewBeneficiary = () => {
  const { id } = useParams();
  const beneficiary = useSelector(state => state.beneficiaries.beneficiaries.find(b => b.id === parseInt(id)));

  if (!beneficiary) {
    return <div>Beneficiary not found</div>;
  }

  return (
    <div>
      <h2>Beneficiary Details</h2>
      <p><strong>Full Name:</strong> {beneficiary.fullName}</p>
      <p><strong>Address:</strong> {beneficiary.address}</p>
      <p><strong>Country:</strong> {beneficiary.country}</p>
      <p><strong>Pincode:</strong> {beneficiary.pincode}</p>
    </div>
  );
};

export default ViewBeneficiary;
