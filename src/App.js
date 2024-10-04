import './App.css';
import { GoQuestion } from "react-icons/go";
import { FaCarAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App" style={{ margin: '0', padding: '0', top: '0' }}>
      <div className="header" style={{ backgroundColor: 'rgb(0,62,255)', color: 'white', height: '60vh' }}>
        <div style={{ display: 'flex', margin: '0 120px' }}>
          <h2 style={{ marginRight: '450px' }}>Booking.com</h2>
          <h2>INR</h2>
          <GoQuestion style={{ margin: '24px', fontSize: '1.5rem' }} />
          <h3 style={{ marginTop: '24px' }}>List your Property</h3>
          <button style={{ height: '32px', margin: '20px', borderRadius: '.2rem', border: 'rgb(0,62,255)', color: 'blue', width: '75px' }}>Register</button>
          <button style={{ height: '32px', margin: '20px -10px', borderRadius: '.2rem', border: 'rgb(0,62,255)', color: 'blue', width: '68px' }}>Sign In</button>
        </div>


        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', border: '1px solid white', borderRadius: '2rem', marginLeft: '120px' }}>
            <IoBedOutline style={{ margin: '18px 0 13px 10px' }} />
            <h3 style={{ margin: '13px 13px 13px 2px', fontWeight: '100' }}>Stays</h3>
          </div>
          <h3 style={{ margin: '13px', fontWeight: '100' }}>Flights</h3>
          <h3 style={{ margin: '13px', fontWeight: '100' }}>Flight + Hotel</h3>
          <div style={{ display: 'flex' }}>
            <FaCarAlt style={{ margin: '18px 0 13px 10px', fontWeight: '100' }} />
            <h3 style={{ margin: '13px 13px 13px 2px', fontWeight: '100' }}>Car rentals</h3>
          </div>
          <h3 style={{ margin: '13px', fontWeight: '100' }}>Attractions</h3>
          <h3 style={{ margin: '13px', fontWeight: '100' }}>Airport taxis</h3>
        </div>


        <div style={{ margin: '80px 0 0 120px' }}>
          <p style={{ fontSize: '50px', fontWeight: '700' }}>Find Your Next stay</p>
          <h2 style={{ fontWeight: '400', marginTop: '-50px' }}>Search low prices on hotels, homes and much more...</h2>
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', border: '1px solid yellow', width: '1150px', margin: '-40px 0 0 120px', backgroundColor: 'white', borderRadius: '.3rem', borderWidth: '2px'}}>
          <div style={{ border: '1px solid yellow', width: '335px', display: 'flex', borderRadius: '.3rem', borderWidth: '2px'}}>
            <IoBedOutline style={{ margin: '23px 0 13px 10px' }} />
            <h5 style={{ marginLeft: '2px' }}>Where are you going?</h5>
          </div>

          <div style={{ border: '1px solid yellow', width: '335px', display: 'flex', borderRadius: '.3rem', borderWidth: '2px'}}>
            <SlCalender style={{ margin: '23px 0 13px 10px' }} />
            <h5 style={{ marginLeft: '2px' }}>Check-in date - Check-out date</h5>
          </div>

          <div style={{ border: '1px solid yellow', width: '335px', display: 'flex', borderRadius: '.3rem', borderWidth: '2px'}}>
            <GoPeople style={{ margin: '23px 0 13px 10px' }} />
            <h5 style={{ marginLeft: '2px' }}>2 adults. 0 children. 1 room</h5>
          </div>

          <button style={{width: '145px', backgroundColor: 'rgb(0,62,255)', borderRadius: '.3rem', borderWidth: '2px', border: '1px solid yellow', color: 'white'}}>Search</button>
        </div>
      </div>

      <div style={{margin: '10px auto auto 120px'}}>
        <input type='checkbox'/>
        <label>I am looking for flights</label>
      </div>
      
      <div className="offer-section" style={{margin: '50px auto 10px 120px'}}>
        <div>
          <h1>Offers</h1>
          <p style={{fontSize: '20px', margin: '-15px auto auto auto'}}>Promotions, Deals and special offers for you</p>
        </div>
        <div style={{display: 'flex', width: '90%'}}>
          <div style={{width: '50%', border: '1px solid grey', margin: '20px 5px 10px 0', borderRadius: '.4rem'}}>
            <h3>Fly away to your dream holiday</h3>
            <p>Get inspired, compare and book flights with more flexibility</p>
            <button>Search for flights</button>
          </div>
          <div style={{width: '50%', border: '1px solid grey', margin: '20px 0 10px 5px', borderRadius: '.4rem'}}>
            <h3>Go for a good time, not a long time</h3>
            <p>Finish your year with a mini break. Save 15% or more when you book and stay by 7 January 2025.</p>
            <button>Find late escape deals</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
