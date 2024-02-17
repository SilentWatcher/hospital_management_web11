
import './OurDoctor.css'

import doctor from '../../assets/home/doctor_home.png'
function OurDoctor() {



  return (
    <div className='OurDoctor'>
        <img src={doctor} alt="" />
        <div>
            <h3>Mr.doctorStrange</h3>
            <p>MBBS, MD, IDDCM</p>
        </div>
    </div>
  )
}

export default OurDoctor