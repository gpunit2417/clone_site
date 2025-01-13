import React from 'react'
import { GoQuestion } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const navigate = useNavigate();
      const contactLink = () => {
        navigate('/contactpage');
      }
  return (
    <div>
        <div className="header" style={{ backgroundColor: 'rgb(0,60,145)', color: 'white' }}>
                <div style={{ display: 'flex', margin: '0 120px' }}>
                    <h2 style={{ marginRight: '800px', cursor: 'pointer' }}>
                        <a href='/' style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}>Booking.com</a></h2>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1J4X8LJ0h28DpeUykXQcMiNAXXWLhvhW0g&s' alt='logo' style={{ height: '25px', width: '25px', margin: '20px 0 0 15px', borderRadius: '1rem', objectFit: 'cover', cursor: 'pointer' }} />
                    <GoQuestion style={{ margin: ' 20px 24px', fontSize: '1.5rem', cursor: 'pointer' }} onClick={contactLink} />
                </div>
            </div>

            <div className="main" >
                
            </div>

            <div className="footer" style={{ backgroundColor: 'rgb(0,60,145)', color: 'white' }}>
                
            </div>
    </div>
  )
}

export default RegisterPage