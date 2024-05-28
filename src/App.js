import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBeneficiary from './Components/AddBeneficiary';
import EditBeneficiary from './Components/EditBeneficiary';
import ViewBeneficiary from './Components/ViewBeneficiary';
import RemoveBeneficiary from './Components/RemoveBeneficiary';
import BeneficiaryList from './Components/BeneficiaryList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BeneficiaryList />} />
        <Route path="/add" element={<AddBeneficiary />} />
        <Route path="/edit/:id" element={<EditBeneficiary />} />
        <Route path="/view/:id" element={<ViewBeneficiary />} />
        <Route path="/remove/:id" element={<RemoveBeneficiary />} />
      </Routes>
    </Router>
  );
};

export default App;
