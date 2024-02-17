import onlinePatient from '../assets/about/onlinePatient.jpg'
import onlineDoctors from '../assets/about/onlineDoctor.jpg'

import '../style/about.css'


function About() {
  return (
    <>
      <section className="aboutus">
        <div className="aboutus_right">
          <h1>We help people to get appointment in online</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad odio culpa molestiae nesciunt velit minima nobis adipisci, officia cum eos quibusdam blanditiis distinctio totam sunt ipsum dolorum modi rerum libero incidunt eius est suscipit tenetur unde! Nostrum voluptas fugiat earum et sequi atque? Voluptas expedita magnam temporibus hic quidem.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, eius enim voluptatibus nesciunt rem sint quas blanditiis autem impedit officiis ex, inventore a unde quis, asperiores quae debitis illo. Optio!</p>
        </div>
        <div className="aboutus_left">
          <img id='onlineDoctorImg' src={onlineDoctors} alt="onlineDoctorImg" />
        </div>
      </section>

      
      <section className='aboutus_bio'>
        <div className="aboutus_bio_right">
          <img id='onlinePatient' src={onlinePatient} alt="onlinePatient" />
        </div>
        <div className="aboutus_bio_left">
          <h4>Biography</h4>
          <h1>Who we are</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, necessitatibus iste. Modi aliquid sunt quis! Vitae facilis provident eaque ratione similique esse a natus, facere officia eius id voluptas, eligendi dignissimos! Ipsa facilis error veniam similique hic cumque nobis voluptatibus nam? Consequuntur cupiditate, quibusdam porro sapiente voluptatem dolorum ducimus ipsam autem, rem tenetur libero. Distinctio, consequatur molestias dicta eligendi accusantium perferendis minus adipisci. Ratione, cumque. Possimus pariatur quidem esse debitis optio ad cumque, totam, aliquid molestiae quo perspiciatis architecto omnis fuga alias eius magnam asperiores voluptas in, iusto eveniet recusandae iste a! Illo iusto unde sed error facilis neque doloremque.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel suscipit recusandae, vero sapiente officiis dignissimos mollitia quasi voluptatem iste? Laudantium qui vel assumenda cumque necessitatibus asperiores, quo libero. Reprehenderit, velit. Fugit officia dolores facere corrupti, obcaecati ratione maxime nobis ducimus magnam quasi distinctio earum ex illo, assumenda, expedita rem dolor.</p>
        </div>

      </section>
    </>
  )
}

export default About

