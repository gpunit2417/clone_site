import React from 'react'
import { GoQuestion } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const contactLink = () => {
    navigate('/contactpage');
  }

  const registerLink = () => {
    navigate('/register')
  }
  return (
    <div className="header" style={{ backgroundColor: 'rgb(0,60,145)', color: 'white', height: '12vh' }}>

      <div style={{ display: 'flex', margin: '0 120px' }}>

        <h2 style={{ marginRight: '450px', cursor: 'pointer' }}>
          <a href='/' style={{ color: 'white', textDecoration: 'none' }}>Booking.com</a></h2>
        <h4>INR</h4>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1J4X8LJ0h28DpeUykXQcMiNAXXWLhvhW0g&s" alt="flag" style={{ height: '25px', width: '25px', margin: '20px 0 0 15px', borderRadius: '1rem', objectFit: 'cover', cursor: 'pointer' }} />

        <GoQuestion style={{ margin: ' 20px 24px', fontSize: '1.5rem', cursor: 'pointer' }} onClick={contactLink} />

        <h3 style={{ marginTop: '15px', cursor: 'pointer', border: '1px solid white', borderRadius: '5px', marginBottom: '24px', padding: '2px 8px' }}><a href='/list' style={{ color: 'white', textDecoration: 'none', fontWeight: '500', fontSize: '.91rem' }}>List your Property</a></h3>

        <button style={{ height: '32px', margin: '15px', borderRadius: '.2rem', border: 'rgb(0,62,255)', color: 'rgb(0, 110, 240)', width: '75px', backgroundColor: 'white', fontWeight: '700', cursor: 'pointer' }} onClick={registerLink}>Register</button>

        <button style={{ height: '32px', margin: '15px -10px', borderRadius: '.2rem', border: 'rgb(0,62,255)', color: 'rgb(0, 110, 240)', width: '68px', backgroundColor: 'white', fontWeight: '700', cursor: 'pointer' }} onClick={registerLink}>Sign In</button>

      </div>
    </div>
  )
}

export default Navbar