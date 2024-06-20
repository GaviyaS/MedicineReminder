

import React, { useState, useEffect } from "react";
import axios from "axios";
import AddPatientModal from "../Modals/AddPatientModal/AddPatientModal.jsx";
import "./Dashboard.css";
import DeleteModal from "../Modals/DeleteModal/DeleteModal.jsx"
import EditModal from "../Modals/EditModal/EditModal.jsx";
import PhoneModal from "../Modals/PhoneModal/PhoneModal.jsx"
import MedicineChatbot from "./MedicineChatbot.jsx";

const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  const [modalContent, setModalContent] = useState(false);
  const [modalEditContent, setEditModalContent] = useState(false);
  const [modalDeleteContent, setDeleteModalContent] = useState(false);
  const [modalPhoneContent, setPhoneModalContent] = useState(false);
  const [choosenUser,setChoosenUser] = useState(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = () => {
    axios.get("http://localhost:5000/getAllUsers")
      .then(response => {
        if(response.data.message === "Data Fetched"){
          setPatients(response.data.arrayList);
        }
      })
      .catch(err => console.log(err))
  };

  const openModal = () => {
    setModalContent(true);
  };

  const openEditModal = (index) => {
    setEditModalContent(true);
    setChoosenUser(index);
  };

  const openDeleteModal = (index) => {
    setDeleteModalContent(true);
    setChoosenUser(index);
  };

  const openPhoneModal = (index) => {
    setPhoneModalContent(true);
    setChoosenUser(index);
  };

  const closeModal = () => {
    setModalContent(false);
    setEditModalContent(false);
    setDeleteModalContent(false);
    setPhoneModalContent(false);
    setChoosenUser(null);
    fetchPatients();
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-top">
        <button onClick={() => openModal()}>Add New Patient</button>
      </div>
      <div className="dashboard-patients">
        {patients.map((patient, index) => (
          <div key={patient._id} className="dashboard-patient">
            <div className="dashboard-patient-left" style={{ 
              backgroundColor: "#f2f2f2", 
              padding: "5px",
              paddingLeft : "10px",
              borderRadius: "5px",
              fontFamily: "Arial, sans-serif",
            }}>
              <h3 style={{ 
                color: "#333", 
                fontSize: "24px",
                marginBottom: "10px",
              }}>
                {patient.name}
              </h3>
              <p style={{ 
                color: "#666", 
                fontSize: "16px",
                fontWeight: "bold"
              }}>
                {patient.phoneNumber}
              </p>
              <div style={{ 
                color: "#333", 
                fontSize: "14px",
                fontWeight: "bold",
                marginBottom: "2px",
              }}>
                Medicine Details
              </div>
              <ul style={{ 
                color: "#333", 
                fontSize: "14px",
                listStyleType: "none",
                paddingLeft: "10px"
              }}>
                {patient.medicines.map((medicine) => (
                  <li key={medicine.medicineName} style={{ 
                    marginBottom: "5px",
                  }}>
                    {medicine.medicineName} {medicine.dosage} {medicine.days}
                  </li>
                ))}
              </ul>
            </div>
            <div className="dashboard-patient-right">
              <button onClick={() => openDeleteModal(index)} className="danger">Delete User</button>
              <button onClick={() => openEditModal(index)}>Edit User Details</button>
              <button onClick={() => openPhoneModal(index)}>Change Phone Number</button>
            </div>
          </div>        
        ))}
      </div>
      <div className="dashboard-container">
      {/* Your existing JSX code */}
      <MedicineChatbot /> {/* Render the chatbot component */}
      {/* Your existing JSX code */}
    </div>
      {modalContent && <AddPatientModal closeModal={closeModal}/>}
      {modalDeleteContent && <DeleteModal closeModal={closeModal} user={patients[choosenUser]}/>}
      {modalEditContent && <EditModal closeModal={closeModal} user={patients[choosenUser]}/>}
      {modalPhoneContent && <PhoneModal closeModal={closeModal} user={patients[choosenUser]}/>}
    </div>
  );
};

export default Dashboard;
