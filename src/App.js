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
        <div style={{ display: 'flex', border: '1px solid yellow', width: '1150px', margin: '-40px 0 0 120px', backgroundColor: 'white', borderRadius: '.3rem', borderWidth: '2px' }}>
          <div style={{ border: '1px solid yellow', width: '335px', display: 'flex', borderRadius: '.3rem', borderWidth: '2px' }}>
            <IoBedOutline style={{ margin: '23px 0 13px 10px' }} />
            <h5 style={{ marginLeft: '2px' }}>Where are you going?</h5>
          </div>

          <div style={{ border: '1px solid yellow', width: '335px', display: 'flex', borderRadius: '.3rem', borderWidth: '2px' }}>
            <SlCalender style={{ margin: '23px 0 13px 10px' }} />
            <h5 style={{ marginLeft: '2px' }}>Check-in date - Check-out date</h5>
          </div>

          <div style={{ border: '1px solid yellow', width: '335px', display: 'flex', borderRadius: '.3rem', borderWidth: '2px' }}>
            <GoPeople style={{ margin: '23px 0 13px 10px' }} />
            <h5 style={{ marginLeft: '2px' }}>2 adults. 0 children. 1 room</h5>
          </div>

          <button style={{ width: '145px', backgroundColor: 'rgb(0,62,255)', borderRadius: '.3rem', borderWidth: '2px', border: '1px solid yellow', color: 'white' }}>Search</button>
        </div>
      </div>

      <div style={{ margin: '10px auto auto 120px' }}>
        <input type='checkbox' />
        <label>I am looking for flights</label>
      </div>

      <div className="offer-section" style={{ margin: '50px auto 0 120px' }}>
        <div>
          <h1>Offers</h1>
          <p style={{ fontSize: '20px', margin: '-15px auto auto auto' }}>Promotions, Deals and special offers for you</p>
        </div>
        <div style={{ display: 'flex', width: '90%' }}>
          <div style={{ width: '50%', border: '1px solid grey', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <h3>Fly away to your dream holiday</h3>
            <p>Get inspired, compare and book flights with more flexibility</p>
            <img src='https://q-xx.bstatic.com/xdata/images/xphoto/500x500/184698944.png?k=6bb1bf3c13db4a7ba3c22a2d1f1051f793c525a78104703b4dec3eb12101f545&o=' alt='logo' style={{ width: '100px', float: 'right', margin: '-80px 2px 0 auto' }} />
            <button style={{ height: '35px', backgroundColor: 'rgb(0,62,255)', color: 'white', border: 'rgb(0,62,255)', borderRadius: '.3rem' }}>Search for flights</button>
          </div>
          <div style={{ width: '50%', border: '1px solid grey', margin: '20px 0 10px 5px', borderRadius: '.4rem', padding: '5px 7px' }}>
            <h3>Go for a good time, not a long time</h3>
            <p>Finish your year with a mini break. Save 15% or more <br />when you book and stay by 7 January 2025.</p>
            <img src='https://q-xx.bstatic.com/xdata/images/xphoto/500x500/372051085.jpeg?k=f5182852fa2c998e2b47cfd922da41ae16c42beb02fb70ecb57ee55ced3271f6&o=' alt='logo' style={{ width: '130px', float: 'right', margin: '-108px 10px auto auto' }} />
            <button style={{ height: '35px', backgroundColor: 'rgb(0,62,255)', color: 'white', border: 'rgb(0,62,255)', borderRadius: '.3rem' }}>Find late escape deals</button>
          </div>
        </div>
      </div>

      <button style={{ border: 'rgb(0,62,255)', backgroundColor: 'rgb(0,62,255)', color: 'rgb(0,62,255)', borderRadius: '1rem', margin: "-200px auto 40px 663px" }}>.</button>

      <div className="explore" style={{ margin: '-10px auto 0 120px' }}>
        <div>
          <h1>Explore India</h1>
          <p style={{ fontSize: '20px', margin: '-15px auto auto auto' }}>These popular destinations have a lot to offer</p>
        </div>
        <div style={{ display: 'flex', width: '90%' }}>
          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://r-xx.bstatic.com/xdata/images/region/170x136/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=" alt="location" style={{ borderRadius: '.5rem' }} />
            <h4 style={{margin: '5px 0px 0px 0px'}}>Goa</h4>
            <p style={{margin: '0px'}}>5,251 properties</p>
          </div>
          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://q-xx.bstatic.com/xdata/images/city/170x136/684919.jpg?k=0a73fce29109503c055e288c413d9a1c5bd66fdb26f01c1438e8017b0b64b42f&o=" alt="location" style={{ borderRadius: '.5rem' }} />
            <h4 style={{margin: '5px 0px 0px 0px'}}>Ooty</h4>
            <p style={{margin: '0px'}}>471 properties</p>
          </div>
          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://r-xx.bstatic.com/xdata/images/city/170x136/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="location" style={{ borderRadius: '.5rem' }} />
            <h4 style={{margin: '5px 0px 0px 0px'}}>Mumbai</h4>
            <p style={{margin: '0px'}}>1,652 properties</p>
          </div>
          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://r-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="location" style={{ borderRadius: '.5rem' }} />
            <h4 style={{margin: '5px 0px 0px 0px'}}>New Delhi</h4>
            <p style={{margin: '0px'}}>2,919 properties</p>
          </div>
          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://q-xx.bstatic.com/xdata/images/city/170x136/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="location" style={{ borderRadius: '.5rem' }} />
            <h4 style={{margin: '5px 0px 0px 0px'}}>Bangalore</h4>
            <p style={{margin: '0px'}}>2,044 properties</p>
          </div>
          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://r-xx.bstatic.com/xdata/images/city/170x136/684720.jpg?k=fdb1d9397eeb9b17d4a1ef6fdf806e6b4366d5ebda38d7f0c212b9c1bec8dcea&o=" alt="location" style={{ borderRadius: '.5rem' }} />
            <h4 style={{margin: '5px 0px 0px 0px'}}>Munnar</h4>
            <p style={{margin: '0px'}}>512 properties</p>
          </div>
        </div>
      </div>

      <div className="trending">
        <div></div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
