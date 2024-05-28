import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BeneficiaryList = () => {
  const beneficiaries = useSelector(state => state.beneficiaries.beneficiaries);

  return (
    <div>
    <h2>Beneficiaries</h2>
    <Link to="/add" className="add-link">Add New Beneficiary</Link>
    <ul>
      {beneficiaries.map(beneficiary => (
        <li key={beneficiary.id}>
          <Link to={`/view/${beneficiary.id}`} className="beneficiary-link"> {beneficiary.fullName} </Link> 
          <Link to={`/edit/${beneficiary.id}`} className="edit-link"> Edit</Link>
          <Link to={`/remove/${beneficiary.id}`} className="remove-link"> Remove</Link>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default BeneficiaryList;
