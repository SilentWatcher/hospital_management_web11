import React from "react";
import "../style/appointment.css";
import patient from '../assets/about/onlinePatient.jpg'
function Appointment() {
    return (
        <>
            <div id="appointment">
                <div className="parent">
                    <div className="text">
                        <h1> We help people to <br /><span>Get Appointment <u>Online</u></span></h1>
                        <p>
                        At HealthHub, we understand that your wellbeing and health is paramount. That's why we're dedicated to providing you with the personalized care and attention you deserve. Schedule your appointment today and experience the difference a caring and professional team can make.
                        </p>
                    </div>
                    <div class="child1">
                        <img src={patient} class="form" />
                    </div>
                </div>

                <div class="highlight">
                    <h1>
                        <span>Appointment</span>&nbsp;Form
                    </h1>
                </div>
                <div class="copy-right">
                    <form>
                        <div class="social-icons">
                            <div>
                                <input
                                    type="text"
                                    name="Name"
                                    placeholder="First Name"
                                    required
                                />
                                <input
                                    type="text"
                                    name="Name"
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="Email"
                                    placeholder="Your Email"
                                    required
                                />
                                <input
                                    type="number"
                                    name="Number"
                                    placeholder="Contact Number"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="date of birth"
                                    name="Date"
                                    placeholder="Date of Birth"
                                    required
                                />
                                <input
                                    type="text"
                                    name="gender"
                                    placeholder="Gender"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type=" appointment date"
                                    name="Date"
                                    placeholder="Appointment Date"
                                    required
                                />
                                <input
                                    type="appointment time"
                                    name="Date"
                                    placeholder="Appointment Time"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="Name"
                                    placeholder="Department Name"
                                    required
                                />
                                <input
                                    type="text"
                                    name="Name"
                                    placeholder="Doctor Name"
                                    required
                                />
                            </div>

                            <div>
                                <textarea
                                    type="text"
                                    rows="6"
                                    
                                    placeholder="Your Address"
                                ></textarea>
                            </div>
                        </div>
                            <button type="submit" class="btn">
                                Submit
                            </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Appointment;
