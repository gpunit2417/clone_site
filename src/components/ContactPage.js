import React from 'react'
function ContactPage() {
  return (
    <div>
      <h4>Help Center</h4>
      <div className="card" style={{ border: '1px solid black' }}>
        <h4>Stay safe online</h4>
        <p>Protect your security by never sharing your personal or credit card information over the phone, by email or chat.</p>
        <a href='#' style={{ color: 'rgb(13, 110, 253)', textDecoration: 'none' }}>Learn More</a>
      </div>
      <div>
        <h1>Welcome to the Help Center</h1>
        <h4>Sign in to contact Customer Service, we're available 24 hours a day
        </h4>
        <div>
        <div className="card" style={{ display: 'flex' }}>
          <div className="first" style={{ width: '40%' }}>
            <h3>Send us a message
            </h3>
            <p>Contact our agents about your booking, and we'll reply as soon as possible.
            </p>
          </div>
          <div className="sec">
            <h3>Call us</h3>
            <p>For anything urgent, you can call us 24/7 on a local or international phone number.
            </p>
          </div>
        </div>
          <button style={{backgroundColor: 'rgb(13, 110, 253)', color: 'white', borderColor: 'rgb(13, 110, 253)', width: '100%'}}>Sign In</button>
          <h4 style={{color: 'rgb(13, 110, 253)'}}>Continue without an account</h4>
        </div>
      </div>
      <h4>Frequently asked questions</h4>
      <div className="card" style={{border: '1px solid black'}}>
        <div className="card" style={{border: '1px solid black'}}></div>
        <div className="card" style={{border: '1px solid black'}}>Cancellations</div>
        <div className="card" style={{border: '1px solid black'}}>Payment</div>
        <div className="card" style={{border: '1px solid black'}}>Booking Details</div>
        <div className="card" style={{border: '1px solid black'}}>Communications</div>
        <div className="card" style={{border: '1px solid black'}}>Room types</div>
        <div className="card" style={{border: '1px solid black'}}>Pricing</div>
        <div className="card" style={{border: '1px solid black'}}>Credit Cards</div>
        <div className="card" style={{border: '1px solid black'}}>Property Policies</div>
        <div className="card" style={{border: '1px solid black'}}>Extra facilities</div>
        <div className="card" style={{border: '1px solid black'}}>Security and awareness</div>
      </div>

      <div style={{border: '1px solid black'}}>
        <div style={{color: 'rgb(13, 110, 253)', display: 'flex'}}>
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