import React from 'react'
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { LuMessagesSquare } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import { PiDotsThreeOutlineThin } from "react-icons/pi";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import Navbar from './HomePage/Navbar';

function ContactPage() {
  return (
    <div>
      <Navbar />
      <p style={{ margin: '30px 120px', fontSize: '.7rem' }}>Help Center</p>
      <div className="card" style={{ border: '1px solid lightgrey', borderRadius: '5px', margin: ' auto 120px' }}>
        <div style={{ display: 'flex' }}>
          <HiOutlineInformationCircle style={{ color: 'rgb(150,0,0)', fontSize: '30px', margin: '10px' }} />

          <h4 style={{ margin: '14px auto auto -5px', fontSize: '.9rem' }}>Stay safe online</h4>

          <FaAngleUp style={{ margin: '10px', cursor: 'pointer' }} />
        </div>

        <p style={{ fontSize: '.9rem', margin: '-10px auto auto 45px' }}>Protect your security by never sharing your personal or credit card information over the phone, by email or chat.</p>

        <a href='/' style={{ color: 'rgb(13, 110, 253)', textDecoration: 'none', fontWeight: '500' }}><p style={{ margin: '5px auto 8px 45px' }}>Learn More</p></a>
      </div>

      <div>
        <h1 style={{ margin: '30px 0 10px 120px' }}>Welcome to the Help Center</h1>
        <p style={{ margin: '0 0 10px 120px' }}>Sign in to contact Customer Service, we're available 24 hours a day</p>
        
        <div style={{ border: '1px solid lightgrey', margin: '2px 120px', borderRadius: '5px' }}>
          <div className="card" style={{ display: 'flex' }}>
            <div className="first" style={{ width: '50%' }}>
              <div style={{ display: 'flex' }}>
                <LuMessagesSquare style={{ fontSize: '25px', margin: '15px' }} />
                <h4 style={{ margin: '15px 0 0 0' }}>Send us a message</h4>
              </div>
              
              <p style={{ fontSize: '.9rem', margin: '-13px 0 0 55px' }}>Contact our agents about your booking, and we'll reply as soon as possible.</p>
            </div>
            
            <div className="sec" style={{ width: '50%' }}>
              <div style={{ display: 'flex' }}>
                <IoCallOutline style={{ fontSize: '25px', margin: '15px' }} />
                <h4 style={{ margin: '15px 0 0 0' }}>Call us</h4>
              </div>
              
              <p style={{ fontSize: '.9rem', margin: '-13px 0 0 55px' }}>For anything urgent, you can call us 24/7 on a local or international phone number.
              </p>
            </div>
          </div>
          
          <button style={{ backgroundColor: 'rgb(13, 110, 253)', color: 'white', borderColor: 'rgb(13, 110, 253)', width: '96%', margin: '15px 0 0 20px', height: '45px', borderRadius: '5px', fontWeight: '500', cursor: 'pointer' }}>Sign In</button>
          
          <h4 style={{ color: 'rgb(13, 110, 253)', margin: '30px auto', textAlign: 'center', fontWeight: '500', cursor: 'pointer' }}>Continue without an account</h4>
        </div>
      </div>

      <h3 style={{ margin: '40px 0 18px 120px' }}>Frequently asked questions</h3>

      <div className="card" style={{ border: '1px solid lightgrey', margin: '10px 120px 0 120px' }}>
        <div className="card" style={{ border: '1px solid lightgrey', display: 'flex', padding: '15px 20px 5px 20px' }}>
          <div style={{ margin: '0 20px', justifyItems: 'center', color: 'rgb(13, 110, 253)', cursor: 'pointer' }}>
            <IoBedOutline style={{ fontSize: '1.5rem' }} />
            <p style={{ margin: '2px 0 5px 0', fontSize: '.9rem' }}>Stays</p>
          </div>

          <div style={{ margin: '0 20px', justifyItems: 'center', cursor: 'pointer' }}>
            <FaCarAlt style={{ fontSize: '1.5rem' }} />
            <p style={{ margin: '2px 0 5px 0', fontSize: '.9rem' }}>Car rentals</p>
          </div>

          <div style={{ margin: '0 20px', justifyItems: 'center', cursor: 'pointer' }}>
            <IoBedOutline style={{ fontSize: '1.5rem' }} />
            <p style={{ margin: '2px 0 5px 0', fontSize: '.9rem' }}>Flights</p>
          </div>

          <div style={{ margin: '0 20px', justifyItems: 'center', cursor: 'pointer' }}>
            <IoBedOutline style={{ fontSize: '1.5rem' }} />
            <p style={{ margin: '2px 0 5px 0', fontSize: '.9rem' }}>Airport taxis</p>
          </div>

          <div style={{ margin: '0 20px', justifyItems: 'center', cursor: 'pointer' }}>
            <IoBedOutline style={{ fontSize: '1.5rem' }} />
            <p style={{ margin: '2px 0 5px 0', fontSize: '.9rem' }}>Insurance</p>
          </div>

          <div style={{ margin: '0 20px', justifyItems: 'center', cursor: 'pointer' }}>
            <PiDotsThreeOutlineThin style={{ fontSize: '1.5rem' }} />
            <p style={{ margin: '2px 0 5px 0', fontSize: '.9rem' }}>Other</p>
          </div>
        </div>

        <div className="card" style={{ border: '1px solid lightgrey', height: '25px', padding: '20px', fontSize: '.9rem', cursor: 'pointer' }}>Cancellations<FaAngleRight style={{ float: 'right', marginTop: '5px' }} /></div>

        <div className="card" style={{ border: '1px solid lightgrey', height: '25px', padding: '20px', fontSize: '.9rem', cursor: 'pointer' }}>Payment<FaAngleRight style={{ float: 'right', marginTop: '5px' }} /></div>

        <div className="card" style={{ border: '1px solid lightgrey', height: '25px', padding: '20px', fontSize: '.9rem', cursor: 'pointer' }}>Booking Details<FaAngleRight style={{ float: 'right', marginTop: '5px' }} /></div>

        <div className="card" style={{ border: '1px solid lightgrey', height: '25px', padding: '20px', fontSize: '.9rem', cursor: 'pointer' }}>Communications<FaAngleRight style={{ float: 'right', marginTop: '5px' }} /></div>

        <div className="card" style={{ border: '1px solid lightgrey', height: '25px', padding: '20px', fontSize: '.9rem', cursor: 'pointer' }}>Room types<FaAngleRight style={{ float: 'right', marginTop: '5px' }} /></div>

        <div className="card" style={{ border: '1px solid lightgrey', height: '25px', padding: '20px', fontSize: '.9rem', cursor: 'pointer' }}>Pricing<FaAngleRight style={{ float: 'right', marginTop: '5px' }} /></div>

        <div className="card" style={{ border: '1px solid lightgrey', height: '25px', padding: '20px', fontSize: '.9rem', cursor: 'pointer' }}>Credit Cards<FaAngleRight style={{ float: 'right', marginTop: '5px' }} /></div>

        <div className="card" style={{ border: '1px solid lightgrey', height: '25px', padding: '20px', fontSize: '.9rem', cursor: 'pointer' }}>Property Policies<FaAngleRight style={{ float: 'right', marginTop: '5px' }} /></div>
        
        <div className="card" style={{ border: '1px solid lightgrey', height: '25px', padding: '20px', fontSize: '.9rem', cursor: 'pointer' }}>Extra facilities<FaAngleRight style={{ float: 'right', marginTop: '5px' }} /></div>
        
        <div className="card" style={{ border: '1px solid lightgrey', height: '25px', padding: '20px', fontSize: '.9rem', cursor: 'pointer' }}>Security and awareness<FaAngleRight style={{ float: 'right', marginTop: '5px' }} /></div>
      </div>

      <div style={{ border: '1px solid lightgrey', margin: '15px 0 0 0' }}>
        <div style={{ display: 'flex' }}>
          <a href="/xyz" style={{ textDecoration: 'none', color: 'rgb(13, 110, 253)' }}><h4 style={{ margin: '20px 10px 5px 120px', fontWeight: '500' }}>Terms & Conditions</h4></a>

          <a href="/xyz" style={{ textDecoration: 'none', color: 'rgb(13, 110, 253)' }}><h4 style={{ margin: '20px 10px 5px 5px', fontWeight: '500' }}>Privacy & Cookie statement</h4></a>

          <a href="/xyz" style={{ textDecoration: 'none', color: 'rgb(13, 110, 253)' }}><h4 style={{ margin: '20px 10px 5px 5px', fontWeight: '500' }}>About Booking.com</h4></a>
        </div>

        <div>
          <p style={{ fontSize: '.9rem', margin: '10px 120px 50px 120px' }}>Copyright © 1996–2025 Booking.com™. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage