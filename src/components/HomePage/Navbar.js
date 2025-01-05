import React from 'react'
import { GoQuestion } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const contactLink = () => {
    navigate('/contactpage');
  }
  return (
      <div className="header" style={{ backgroundColor: 'rgb(0,60,145)', color: 'white', height: '12vh' }}>
        <div style={{ display: 'flex', margin: '0 120px' }}>
          <h2 style={{ marginRight: '450px', cursor: 'pointer' }}>
            <a href='/' style={{color: 'white', textDecoration: 'none'}}>Booking.com</a></h2>
          <h2>INR</h2> 
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1J4X8LJ0h28DpeUykXQcMiNAXXWLhvhW0g&s" alt="flag" style={{ height: '25px', width: '25px', margin: '26px 0 0 15px', borderRadius: '1rem', objectFit: 'cover', cursor: 'pointer' }} />
          <GoQuestion style={{ margin: '24px', fontSize: '1.5rem', cursor: 'pointer' }} onClick={contactLink}/>
          <h3 style={{ marginTop: '24px', cursor: 'pointer' }}>List your Property</h3>
          <button style={{ height: '32px', margin: '20px', borderRadius: '.2rem', border: 'rgb(0,62,255)', color: 'rgb(0, 110, 240)', width: '75px', backgroundColor: 'white', fontWeight: '700', cursor: 'pointer'}}>Register</button>
          <button style={{ height: '32px', margin: '20px -10px', borderRadius: '.2rem', border: 'rgb(0,62,255)', color: 'rgb(0, 110, 240)', width: '68px', backgroundColor: 'white', fontWeight: '700', cursor: 'pointer'}}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar