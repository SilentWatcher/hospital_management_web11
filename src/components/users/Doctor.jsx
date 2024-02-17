import React from 'react'

function Doctor() {
  return (
    <div>
        <div class="header">
          <h1>Doctor Dashboard</h1>
        </div>

        <div class="container">
          <div class="card">
            <h2>Patient Appointments</h2>
            <p>You have 5 upcoming appointments.</p>
            <a href="#">View Appointments</a>
          </div>
          <div class="card">
            <h2>Prescription Requests</h2>
            <p>You have 3 pending prescription requests.</p>
            <a href="#">View Requests</a>
          </div>
          <div class="card">
            <h2>Medical Records</h2>
            <p>Access and manage patient medical records.</p>
            <a href="#">View Records</a>
          </div>
        </div>

        <div class="footer">
          <p>&copy; 2024 Doctor Dashboard</p>
        </div>
    </div>
  )
}

export default Doctor