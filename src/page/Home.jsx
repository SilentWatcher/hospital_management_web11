import React from 'react'
import '../style/home.css'
// images import 
import Doctors from '../assets/home/doctor_home.png'
import OurDoctor from '../components/home/OurDoctor'
import paperPlane from '../assets/home/paper_plane.jpg'

function Home() {
  return (
    <>
      <section id="hero">
        <div className='home_info'>
          <h1>We help people to get appointment in online</h1>
          
          <p>HealthHub simplifies the process of booking healthcare appointments online. Whether you're a patient seeking specialized care or a healthcare professional managing appointments, our user-friendly platform ensures a quick and convenient experience. Your health, your schedule - effortlessly connected with HealthHub.</p>
          <button className='call_to_action'>BOOK AN APPOINTMENT  &nbsp;➤</button>
        </div>
        <div className='home_doctor'>
          <img  className='doctors' src={Doctors} alt="doctors" />
        </div>
      </section>
      <section className="our_doctors">
        <h1>OUR DOCTORS</h1>
        <div className="doct_component">
          <OurDoctor/>
          <OurDoctor/>
          <OurDoctor/>
          <OurDoctor/>
          <OurDoctor/>
          <OurDoctor/>
          <OurDoctor/>
          <OurDoctor/>
          <OurDoctor/>
        </div>
      </section>
      <section className="send_message">
        <h1>Send us a message</h1>
      <form className="contact_form" >
        <div className="form_row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
      
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"


          />
        </div>
        <div className="form-row">
          <input
            type="tel"
            name="mobileNumber"
            placeholder="Mobile Number"

          />
          <input
            type="email"
            name="email"
            placeholder="Email"

          />
        </div>
        <textarea
          name="message"
          placeholder="Message"

        />
        <button type="submit">Send</button>
      </form>
      <img src={paperPlane} alt="paperPlane" />
      </section>
    </>
  )
}

export default Home