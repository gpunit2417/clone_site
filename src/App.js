import './App.css';
import { GoQuestion } from "react-icons/go";
import { FaCarAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { PiCityLight } from "react-icons/pi";
import { MdOutlineBeachAccess } from "react-icons/md";
import { LuBike } from "react-icons/lu";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{ margin: '0', padding: '0', top: '0' }}>
      <div className="header" style={{ backgroundColor: 'rgb(0,60,145)', color: 'white', height: '60vh' }}>
        <div style={{ display: 'flex', margin: '0 120px' }}>
          <h2 style={{ marginRight: '450px' }}>Booking.com</h2>
          <h2>INR</h2>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1J4X8LJ0h28DpeUykXQcMiNAXXWLhvhW0g&s" alt="flag" style={{ height: '25px', width: '25px', margin: '26px 0 0 15px', borderRadius: '1rem', objectFit: 'cover' }} />
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
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Goa</h4>
            <p style={{ margin: '0px' }}>5,251 properties</p>
          </div>

          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://q-xx.bstatic.com/xdata/images/city/170x136/684919.jpg?k=0a73fce29109503c055e288c413d9a1c5bd66fdb26f01c1438e8017b0b64b42f&o=" alt="location" style={{ borderRadius: '.5rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Ooty</h4>
            <p style={{ margin: '0px' }}>471 properties</p>
          </div>

          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://r-xx.bstatic.com/xdata/images/city/170x136/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="location" style={{ borderRadius: '.5rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Mumbai</h4>
            <p style={{ margin: '0px' }}>1,652 properties</p>
          </div>

          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://r-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="location" style={{ borderRadius: '.5rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>New Delhi</h4>
            <p style={{ margin: '0px' }}>2,919 properties</p>
          </div>

          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://q-xx.bstatic.com/xdata/images/city/170x136/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="location" style={{ borderRadius: '.5rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Bangalore</h4>
            <p style={{ margin: '0px' }}>2,044 properties</p>
          </div>

          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://r-xx.bstatic.com/xdata/images/city/170x136/684720.jpg?k=fdb1d9397eeb9b17d4a1ef6fdf806e6b4366d5ebda38d7f0c212b9c1bec8dcea&o=" alt="location" style={{ borderRadius: '.5rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Munnar</h4>
            <p style={{ margin: '0px' }}>512 properties</p>
          </div>
        </div>
      </div>

      <div className="trending" style={{ margin: '-10px auto 0 120px' }}>
        <div>
          <h1>Trending Destinations</h1>
          <p style={{ fontSize: '20px', margin: '-15px auto auto auto' }}>Most popular choices for travellers from India</p>
        </div>
        <div style={{ display: 'flex', width: '90%' }}>
          <div style={{ width: '50%', margin: '0 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <h2 style={{ top: '54px', position: 'relative', margin: '-31px 0 0 25px', color: 'white', textShadow: ' 1px 1px black' }}>New Delhi <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1J4X8LJ0h28DpeUykXQcMiNAXXWLhvhW0g&s" alt="flag" style={{ height: '22px', width: '35px', margin: '26px 0 0 4px', objectFit: 'cover' }} /></h2>
            <img src="https://cf2.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="trending" style={{ borderRadius: '.5rem', width: '100%', objectFit: 'cover', height: '50vh' }} />
          </div>
          <div style={{ width: '50%', margin: '0 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <h2 style={{ top: '54px', position: 'relative', margin: '-31px 0 0 25px', color: 'white', textShadow: ' 1px 1px black' }}>Bangalore <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1J4X8LJ0h28DpeUykXQcMiNAXXWLhvhW0g&s" alt="flag" style={{ height: '22px', width: '35px', margin: '26px 0 0 4px', objectFit: 'cover' }} /></h2>
            <img src="https://cf2.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="location" style={{ borderRadius: '.5rem', width: '100%', objectFit: 'cover', height: '50vh' }} />
          </div>
        </div>

        <div style={{ display: 'flex', width: '90%', margin: '-15px 0 0 0' }}>
          <div style={{ width: '33%', margin: '0 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <h2 style={{ top: '54px', position: 'relative', margin: '-31px 0 0 25px', color: 'white', textShadow: ' 1px 1px black' }}>Mumbai <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1J4X8LJ0h28DpeUykXQcMiNAXXWLhvhW0g&s" alt="flag" style={{ height: '22px', width: '35px', margin: '26px 0 0 4px', objectFit: 'cover' }} /></h2>
            <img src="https://cf2.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="trending" style={{ borderRadius: '.5rem', width: '100%', objectFit: 'cover', height: '40vh' }} />
          </div>
          <div style={{ width: '33%', margin: '0 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <h2 style={{ top: '54px', position: 'relative', margin: '-31px 0 0 25px', color: 'white', textShadow: ' 1px 1px black' }}>Chennai <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1J4X8LJ0h28DpeUykXQcMiNAXXWLhvhW0g&s" alt="flag" style={{ height: '22px', width: '35px', margin: '26px 0 0 4px', objectFit: 'cover' }} /></h2>
            <img src="https://cf2.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" alt="trending" style={{ borderRadius: '.5rem', width: '100%', objectFit: 'cover', height: '40vh' }} />
          </div>
          <div style={{ width: '33%', margin: '0 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <h2 style={{ top: '54px', position: 'relative', margin: '-31px 0 0 25px', color: 'white', textShadow: ' 1px 1px black' }}>Hyderabad <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1J4X8LJ0h28DpeUykXQcMiNAXXWLhvhW0g&s" alt="flag" style={{ height: '22px', width: '35px', margin: '26px 0 0 4px', objectFit: 'cover' }} /></h2>
            <img src="https://cf2.bstatic.com/xdata/images/city/600x600/684653.jpg?k=306ccafcc8a4a7e23b9e8a05b183453fe885b312a4daa5ce76ec39a1b79cbc6f&o=" alt="location" style={{ borderRadius: '.5rem', width: '100%', objectFit: 'cover', height: '40vh' }} />
          </div>
        </div>
      </div>

      <div className="browse" style={{ margin: '-10px auto 0 120px' }}>
        <h1>Browse by Property type in Munnar</h1>
        <div style={{ display: 'flex', width: '90%' }}>
          <div style={{ margin: '5px 5px 0 0', width: '100%', objectFit: 'cover' }}>
            <img src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="browse" style={{ borderRadius: '.4rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Hotels</h4>
            <p style={{ margin: '0px', fontSize: '.8rem' }}>11 Oct-12 Oct, 2 adults</p>
            <p style={{ margin: '0px', fontSize: '.8rem' }}>54 available</p>
          </div>
          <div style={{ margin: '5px 5px 0 0', width: '100%', objectFit: 'cover' }}>
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" alt="browse" style={{ borderRadius: '.4rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Apartments</h4>
            <p style={{ margin: '0px', fontSize: '.8rem' }}>11 Oct-12 Oct, 2 adults</p>
            <p style={{ margin: '0px', fontSize: '.8rem' }}>30 available</p>
          </div>
          <div style={{ margin: '5px 5px 0 0', width: '100%', objectFit: 'cover' }}>
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="browse" style={{ borderRadius: '.4rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Resorts</h4>
            <p style={{ margin: '0px', fontSize: '.8rem' }}>11 Oct-12 Oct, 2 adults</p>
            <p style={{ margin: '0px', fontSize: '.8rem' }}>49 available</p>
          </div>
          <div style={{ margin: '5px 5px 0 0', width: '100%', objectFit: 'cover' }}>
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="browse" style={{ borderRadius: '.4rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Villas</h4>
            <p style={{ margin: '0px', fontSize: '.8rem' }}>11 Oct-12 Oct, 2 adults</p>
            <p style={{ margin: '0px', fontSize: '.8rem' }}>14 available</p>
          </div>
        </div>
      </div>
      <div className="quick" style={{ margin: '-10px auto 0 120px' }}>
        <div>
          <h1>Quick and easy trip planner</h1>
          <p style={{ fontSize: '20px', margin: '-15px auto auto auto' }}>Pick a vibe and explore the top destinations in India</p>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ border: '1px solid rgb(65,135,255)', backgroundColor: 'rgb(235,245,255)', borderRadius: '1.2rem', height: '40px', width: '100px', margin: '10px 10px 0 0', textAlign: 'center', borderWidth: '1.8px', color: 'rgb(65,135,255)', display: 'flex' }}>
            <CiHeart style={{ margin: '8px 5px 0 5px' }} />
            <p style={{ margin: '5px 0 0 0' }}>Romance</p>
          </div>
          <div style={{ margin: '0 10px 0 10px', display: 'flex' }}>
            <LuBike style={{ margin: '20px 5px 0 5px' }} />
            <p>Outdoors</p>
          </div>
          <div style={{ margin: '0 10px 0 10px', display: 'flex' }}>
            <PiCityLight style={{ margin: '19px 5px 0 5px' }} />
            <p>City</p>
          </div>
          <div style={{ margin: '0 10px 0 10px', display: 'flex' }}>
            <MdOutlineBeachAccess style={{ margin: '19px 5px 0 5px' }} />
            <p>Beach</p>
          </div>
        </div>
        <div style={{ display: 'flex', width: '50%' }}>
          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140052521.jpg?k=a6bd9352c790d92b6969bcfbab4ec45793e60579c6212519ad6d4f6817e41219&o=" alt="location" style={{ width: '170px', height: '136px', borderRadius: '.5rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Nedumbassery</h4>
            <p style={{ margin: '0px' }}>74 km from Munnar</p>
          </div>

          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018250.jpg?k=7b9d3f59146dead4c932675f7c1bd5f6f4f74390c5584d00320cc51d6593ba3a&o=" alt="location" style={{ width: '170px', height: '136px', borderRadius: '.5rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Kottayam</h4>
            <p style={{ margin: '0px' }}>81 km from Munnar</p>
          </div>

          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018293.jpg?k=eba1b4abc1a196e422d559e205efd895999a9f5e643bc09544d91f9d18b30733&o=" alt="location" style={{ width: '170px', height: '136px', borderRadius: '.5rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Ernakulam</h4>
            <p style={{ margin: '0px' }}>86 km from Munnar</p>
          </div>

          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140052552.jpg?k=478b1b6119830c85ba58e1509b36890c1c9083974446f9f132aedbbed0af877d&o=" alt="location" style={{ width: '170px', height: '136px', borderRadius: '.5rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Ambalavayal</h4>
            <p style={{ margin: '0px' }}>194 km from Munnar</p>
          </div>

          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018163.jpg?k=f36cf9c92731c02afead1f697dd091271ac62ad0d1d904ad937d571b2f6a17ae&o=" alt="location" style={{ width: '170px', height: '136px', borderRadius: '.5rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Sultan Bathery</h4>
            <p style={{ margin: '0px' }}>195 km from Munnar</p>
          </div>

          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018181.jpg?k=8701d90839626e2b1dedfbe09dd993366c383a71b9786d3677ed8ebc61bd64a9&o=" alt="location" style={{ width: '170px', height: '136px', borderRadius: '.5rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Salem</h4>
            <p style={{ margin: '0px' }}>212 km from Munnar</p>
          </div>
        </div>
      </div>

      <div className="deals" style={{ margin: '-10px auto 0 120px' }}>
        <div>
          <h1>Deals for the weekend</h1>
          <p style={{ fontSize: '20px', margin: '-15px auto auto auto' }}>Save on stays for 18 October - 20 October</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', width: '93%' }}>
          <div className="places" style={{ width: '69%', margin: '20px 5px 10px 0', borderRadius: '.5rem', border: '1px grey', backgroundColor: 'rgb(250,250,250)' }}>
            <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140052521.jpg?k=a6bd9352c790d92b6969bcfbab4ec45793e60579c6212519ad6d4f6817e41219&o=" alt="location" style={{ width: '280px', height: '207px', borderRadius: '.5rem .5rem .1rem .1rem' }} />
            <p style={{ border: 'rgb(0, 60, 145)', width: '45px', fontSize: '12px', textAlign: 'center', backgroundColor: 'rgb(0, 60, 145)', color: '#fff', borderRadius: '.1rem', margin: '2px 4px' }}>Genius</p>
            <h4 style={{ margin: '5px 0px 0px 2px' }}>Hotel Oasis Grand Near IGI Delhi Airport</h4>
            <p style={{ margin: '0px 2px' }}>New Delhi, India</p>
            <div style={{ display: 'flex', height: '30px' }}>
              <p style={{ border: 'rgb(0, 60, 145)', width: '25px', fontSize: '12px', textAlign: 'center', backgroundColor: 'rgb(0, 60, 145)', color: '#fff', borderRadius: '.2rem', margin: '3px 4px', height: '30px', justifyContent: 'center' }}>8.1</p>
              <p style={{ margin: 'auto 0' }}>Very good · 34 reviews</p>
            </div>
            <div style={{ margin: '30px 0 -2px 75px' }}>
              <p>2 nights&nbsp;
                <strike style={{ color: 'red' }}>₹ 2,752</strike>&nbsp;
                <b>₹ 2,477</b>
              </p>
            </div>
          </div>

          <div className="places" style={{ width: '69%', margin: '20px 5px 10px 0', borderRadius: '.5rem', border: '1px grey', backgroundColor: 'rgb(250,250,250)' }}>
            <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018250.jpg?k=7b9d3f59146dead4c932675f7c1bd5f6f4f74390c5584d00320cc51d6593ba3a&o=" alt="location" style={{ width: '280px', height: '207px', borderRadius: '.5rem .5rem .1rem .1rem' }} />
            <p style={{ border: 'rgb(0, 60, 145)', width: '45px', fontSize: '12px', textAlign: 'center', backgroundColor: 'rgb(0, 60, 145)', color: '#fff', borderRadius: '.1rem', margin: '2px 4px' }}>Genius</p>
            <h4 style={{ margin: '5px 0px 0px 2px' }}>Trim Boutique Parkota Haveli</h4>
            <p style={{ margin: '0px 2px' }}>Jaipur, India</p>
            <div style={{ display: 'flex', height: '30px' }}>
              <p style={{ border: 'rgb(0, 60, 145)', width: '25px', fontSize: '12px', textAlign: 'center', backgroundColor: 'rgb(0, 60, 145)', color: '#fff', borderRadius: '.2rem', margin: '3px 4px', height: '30px', justifyContent: 'center' }}>8.1</p>
              <p style={{ margin: 'auto 0' }}>Fabulous · 176 reviews</p>
            </div>
            <div style={{ margin: '30px 0 -2px 75px' }}>
              <p>2 nights&nbsp;
                <strike style={{ color: 'red' }}>₹ 8,998</strike>&nbsp;
                <b>₹ 6,749</b>
              </p>
            </div>
          </div>

          <div className="places" style={{ width: '69%', margin: '20px 5px 10px 0', borderRadius: '.5rem', border: '1px grey', backgroundColor: 'rgb(250,250,250)' }}>
            <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018293.jpg?k=eba1b4abc1a196e422d559e205efd895999a9f5e643bc09544d91f9d18b30733&o=" alt="location" style={{ width: '280px', height: '207px', borderRadius: '.5rem .5rem .1rem .1rem' }} />
            <p style={{ border: 'rgb(0, 60, 145)', width: '45px', fontSize: '12px', textAlign: 'center', backgroundColor: 'rgb(0, 60, 145)', color: '#fff', borderRadius: '.1rem', margin: '2px 4px' }}>Genius</p>
            <h4 style={{ margin: '5px 0px 0px 2px' }}>Limewood Stay - Executive Huda City Center</h4>
            <p style={{ margin: '0px 2px' }}>Gurgaon, India</p>
            <div style={{ display: 'flex', height: '30px' }}>
              <p style={{ border: 'rgb(0, 60, 145)', width: '25px', fontSize: '12px', textAlign: 'center', backgroundColor: 'rgb(0, 60, 145)', color: '#fff', borderRadius: '.2rem', margin: '3px 4px', height: '30px', justifyContent: 'center' }}>8.1</p>
              <p style={{ margin: 'auto 0' }}>Fabulous · 282 reviews</p>
            </div>
            <div style={{ margin: '30px 0 -2px 75px' }}>
              <p>2 nights&nbsp;
                <strike style={{ color: 'red' }}>₹ 6,804</strike>&nbsp;
                <b>₹ 3,402</b>
              </p>
            </div>
          </div>

          <div className="places" style={{ width: '69%', margin: '20px 5px 10px 0', borderRadius: '.5rem', border: '1px grey', backgroundColor: 'rgb(250,250,250)' }}>
            <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140052552.jpg?k=478b1b6119830c85ba58e1509b36890c1c9083974446f9f132aedbbed0af877d&o=" alt="location" style={{ width: '280px', height: '207px', borderRadius: '.5rem .5rem .1rem .1rem' }} />
            <p style={{ border: 'rgb(0, 60, 145)', width: '45px', fontSize: '12px', textAlign: 'center', backgroundColor: 'rgb(0, 60, 145)', color: '#fff', borderRadius: '.1rem', margin: '2px 4px' }}>Genius</p>
            <h4 style={{ margin: '5px 0px 0px 2px' }}>Hotel Luxury Villa Near Delhi Airport</h4>
            <p style={{ margin: '0px 2px' }}>New Delhi, India</p>
            <div style={{ display: 'flex', height: '30px' }}>
              <p style={{ border: 'rgb(0, 60, 145)', width: '25px', fontSize: '12px', textAlign: 'center', backgroundColor: 'rgb(0, 60, 145)', color: '#fff', borderRadius: '.2rem', margin: '3px 4px', height: '30px', justifyContent: 'center' }}>8.1</p>
              <p style={{ margin: 'auto 0' }}>Fabulous · 87 reviews</p>
            </div>
            <div style={{ margin: '30px 0 -2px 75px' }}>
              <p>2 nights&nbsp;
                <strike style={{ color: 'red' }}>₹ 3,076</strike>&nbsp;
                <b>₹ 2,769</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div></div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
