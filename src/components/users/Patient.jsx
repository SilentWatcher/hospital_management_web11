import React from "react";
import './patient.css'
import  patient from '../../assets/patient/patient.jpg'

function Patient() {
    return (
        <div>
            <div class="patient_page">
                <section class="sidebar">
                    <div>
                        <img src={patient}/>
                    </div>
                    <p>Patient</p>
                    <h1>Mansi</h1>
                    <div>
                        <ul>
                            <li>
                                <i class="fa-solid fa-gauge"></i>Dashboard
                            </li>
                            <li>
                                <i class="fa-regular fa-calendar-check"></i>
                                Appointments
                            </li>
                            <li>
                                <i class="fa-solid fa-user-group"></i>Discharge
                            </li>
                        </ul>
                    </div>
                </section>
                <div class="patient-dashboard">
                    <div class="logo">
                        <h1>HealthHub</h1>
                        <p>Logout</p>
                    </div>
                    <div class="container">
                        <div class="card" style={{ backgroundColor: "#007aa5", backgroundImage:"linear-gradient(45deg, #00000069, #ffffff47,#007aa5, #007aa5" }}>
                            <div class="details">
                                <p>Jethalal</p>
                                <p>Doctor Name</p>
                            </div>
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div class="card" style={{ backgroundColor: "#ff0039",    backgroundImage: " linear-gradient(45deg, #00000069, #ffffff47,#ff0039,#ff0039" }}>
                            <div class="details">
                                <p>pain</p>
                                <p>symptoms</p>
                            </div>
                            <i class="fa-solid fa-circle-info"></i>
                        </div>
                        <div class="card" style={{ backgroundColor: "#03bf6a",   backgroundImage: " linear-gradient(45deg, #00000069, #ffffff47,#03bf6a, #03bf6a"  }}>
                            <div class="details">
                                <p>1234567890</p>
                                <p>Doctor mobile</p>
                            </div>
                            <i class="fa-solid fa-mobile-screen"></i>
                        </div>
                        <div class="card" style={{ backgroundColor: "#64085e",  backgroundImage: " linear-gradient(45deg, #00000069, #ffffff47, #64085e, #64085e"  }}>
                            <div class="details">
                                <p>Address</p>
                                <p>Doctor Address</p>
                            </div>
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div class="card" style={{ backgroundColor: "#c61f00",  backgroundImage: " linear-gradient(45deg, #00000069, #ffffff47, #c61f00, #c61f00"  }}>
                            <div class="details">
                                <p>Dermatologists</p>
                                <p>Doctor Department</p>
                            </div>
                            <i class="fa-solid fa-rectangle-list"></i>
                        </div>
                        <div class="card" style={{ backgroundColor: "#8400ff",  backgroundImage: " linear-gradient(45deg, #00000069, #ffffff47, #8400ff, #8400ff"  }}>
                            <div class="details">
                                <p>Date</p>
                                <p>admit date</p>
                            </div>
                            <i class="fa-solid fa-calendar-days"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Patient;
