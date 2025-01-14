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

            <div className="main" style={{margin: '-10px 505px'}}>
                <p style={{fontWeight: '700', fontSize: '1.3rem'}}>Sign in or create an account</p>
                <p style={{fontSize: '.9rem', margin: '-7px 0 15px 0'}}>You can sign in using your Booking.com account to access our services.</p>
                <label style={{fontSize: '.9rem', fontWeight: '500'}}>Email address</label><br/>
                <input type="text" placeholder='Enter your email address' style={{width: '93%', height: '30px', marginTop: '6px', paddingLeft: '6px'}}/><br/>
                <button style={{margin: '18px 0 18px 0', backgroundColor: 'rgb(13, 110, 253)', color: 'white', border: '1px solid rgb(13, 110, 253)', borderRadius: '5px', height: '7.95vh', width: '25vw', cursor: 'pointer', fontSize: '.95rem', fontWeight: '500'}}>Continue with email</button>
                <div style={{display: 'flex'}}>
                    <hr style={{height: '0px', width: '70px', margin: 'auto 5px'}}/>
                    <p style={{margin: '-5px 0 0 0', fontSize: '.9rem'}}>or use one of these options</p>
                    <hr style={{height: '0px', width: '70px', margin: 'auto 5px'}} />
                </div>
                <div style={{display: 'flex', justifyContent: 'space-evenly', margin: '30px -1px'}}>
                    <div style={{border: '1px solid lightgrey', borderRadius: '5px', padding: '5px'}}>
                        <img src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" alt="" style={{height: '30px', width: '50px', marginTop: '10px'}}/>
                    </div>
                    <div style={{border: '1px solid lightgrey', borderRadius: '5px', padding: '5px'}}>
                        <img src="https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg" alt="" style={{height: '50px', width: '60px'}}/>
                    </div>
                    <div style={{border: '1px solid lightgrey', borderRadius: '5px', padding: '5px'}}>
                        <img src="https://seekvectors.com/files/download/600dde92dc87c2bf714117db0fa6c8ce.jpg" alt="" style={{height: '48px', width: '50px'}}/>
                    </div>
                </div>
            </div>

            <div className="footer" style={{ margin: '40px 505px 0 505px', fontSize: '.72rem' }}>
                <hr />
                <p>By signing in or creating an account, you agree with our Terms & conditions and Privacy statement
                </p>
                    <p>All rights reserved.</p>
                    <p>Copyright (2006 - 2025) - Booking.com™
                    </p>
            </div>
    </div>
  )
}

export default RegisterPage