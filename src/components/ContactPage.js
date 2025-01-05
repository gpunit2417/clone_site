import React from 'react'
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { LuMessagesSquare } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import { PiDotsThreeOutlineThin } from "react-icons/pi";

function ContactPage() {
  return (
    <div>
      <p style={{ margin: '30px 120px', fontSize: '.7rem' }}>Help Center</p>
      <div className="card" style={{ border: '1px solid lightgrey', borderRadius: '5px', margin: ' auto 120px' }}>
        <div style={{ display: 'flex' }}>
          <HiOutlineInformationCircle style={{ color: 'rgb(150,0,0)', fontSize: '30px', margin: '10px' }} />
          <h4 style={{margin: '14px auto auto -5px', fontSize: '.9rem'}}>Stay safe online</h4>
        </div>
        <p style={{fontSize: '.9rem', margin: '-10px auto auto 45px'}}>Protect your security by never sharing your personal or credit card information over the phone, by email or chat.</p>
        <a href='#' style={{ color: 'rgb(13, 110, 253)', textDecoration: 'none', fontWeight: '500' }}><p style={{ margin: '5px auto 8px 45px' }}>Learn More</p></a>
      </div>
      <div>
        <h1 style={{margin: '30px 0 10px 120px'}}>Welcome to the Help Center</h1>
        <p style={{margin: '0 0 10px 120px'}}>Sign in to contact Customer Service, we're available 24 hours a day</p>
        <div style={{border: '1px solid lightgrey', margin: '2px 120px'}}>
          <div className="card" style={{ display: 'flex' }}>
            <div className="first" style={{ width: '40%' }}>
              <LuMessagesSquare />
              <h3>Send us a message
              </h3>
              <p>Contact our agents about your booking, and we'll reply as soon as possible.
              </p>
            </div>
            <div className="sec">
              <IoCallOutline />
              <h3>Call us</h3>
              <p>For anything urgent, you can call us 24/7 on a local or international phone number.
              </p>
            </div>
          </div>
          <button style={{ backgroundColor: 'rgb(13, 110, 253)', color: 'white', borderColor: 'rgb(13, 110, 253)', width: '100%' }}>Sign In</button>
          <h4 style={{ color: 'rgb(13, 110, 253)' }}>Continue without an account</h4>
        </div>
      </div>
      <h4>Frequently asked questions</h4>
      <div className="card" style={{ border: '1px solid black' }}>
        <div className="card" style={{ border: '1px solid black', display: 'flex' }}>
          <div>
            <IoBedOutline />
            <p>Stays</p>
          </div>
          <div>
            <FaCarAlt />
            <p>Car rentals</p>
          </div>
          <div>
            <IoBedOutline />
            <p>Flights</p>
          </div>
          <div>
            <IoBedOutline />
            <p>Airport taxis</p>
          </div>
          <div>
            <IoBedOutline />
            <p>Insurance</p>
          </div>
          <div>
            <PiDotsThreeOutlineThin />
            <p>Other</p>
          </div>
        </div>
        <div className="card" style={{ border: '1px solid black' }}>Cancellations</div>
        <div className="card" style={{ border: '1px solid black' }}>Payment</div>
        <div className="card" style={{ border: '1px solid black' }}>Booking Details</div>
        <div className="card" style={{ border: '1px solid black' }}>Communications</div>
        <div className="card" style={{ border: '1px solid black' }}>Room types</div>
        <div className="card" style={{ border: '1px solid black' }}>Pricing</div>
        <div className="card" style={{ border: '1px solid black' }}>Credit Cards</div>
        <div className="card" style={{ border: '1px solid black' }}>Property Policies</div>
        <div className="card" style={{ border: '1px solid black' }}>Extra facilities</div>
        <div className="card" style={{ border: '1px solid black' }}>Security and awareness</div>
      </div>

      <div style={{ border: '1px solid black' }}>
        <div style={{ color: 'rgb(13, 110, 253)', display: 'flex' }}>
          <h4>Terms & Conditions</h4>
          <h4>Privacy & Cookie statement</h4>
          <h4>About Booking.com</h4>
        </div>
        <div>
          <p>Copyright © 1996–2025 Booking.com™. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage