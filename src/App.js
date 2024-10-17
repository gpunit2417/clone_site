import './App.css';
import Navbar from './components/Navbar';
import Offer from './components/Offer';
import Explore from './components/Explore';
import Trending from './components/Trending';
import Browse from './components/Browse';
import Quick from './components/Quick';
import Deals from './components/Deals';
import { FaCircle } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{ margin: '0', padding: '0', top: '0' }}>
      <Navbar/>
      <Offer/>
      <Explore/>
      <Trending/>
      <Browse/>
      <Quick/>
      <Deals/>

      
      

      
      <div className='inspiration' style={{ margin: '-10px auto 0 120px', width: '80%' }}>
        <div style={{ display: 'flex' }}>
          <h1>Get inspiration for your next trip</h1>
          <h3 style={{ margin: '37px 0 0 530px', color: 'blue' }}>More</h3>
        </div>
        <div style={{ display: 'flex' }}>
          <div>
            <video src="https://eu-assets.contentstack.com/v3/assets/bltbebdf496526c3cfd/blt0f67f40bb1f306c3/656d8bde4bf0bf040a8ea383/B6_NYE-2.mp4" alt="videoframe" style={{ width: '530px', borderRadius: '.5rem' }} />
            <div style={{ margin: '-100px 5px 0 10px' }}>
              <b style={{ color: '#fff', fontSize: '20px' }}>New Year’s Eve in New York City</b>
              <p style={{ color: '#fff', fontSize: '14px' }}>Ring in the new year with iconic moments and unforgettable memories in New York City</p>
            </div>
          </div>
          <div style={{ display: 'flex', margin: '0 10px' }}>
            <div style={{ margin: '0 0 0 5px' }}>
              <img src="https://cf.bstatic.com/xdata/images/xphoto/720x405/292260574.webp?k=efc8e339ea66514c3b64c5bc891f1608d22a40eb23b853bc0c9ecb93c541ef10&o=" alt="" style={{ width: '285px', height: '227px', borderRadius: '.5rem' }} />
              <p>
                <b>6 best ryokans in Japan to<br /> rejuvenate yourself</b>
                <p style={{ fontSize: '14px' }}>Discover unmissable ryokans to relax and unwind in style.</p>
              </p>
            </div>
            <div style={{ margin: '0 0 0 15px' }}>
              <img src="https://cf.bstatic.com/xdata/images/xphoto/540x405/290483794.webp?k=916f7bac0ccdb08efcb269ad29cc10816ab66cd1671359066d23d32fb17b5c39&o=" alt="" style={{ width: '285px', height: '227px', borderRadius: '.5rem' }} />
              <p>
                <b>7 best places in Asia to celebrate <br />Christmas</b>
                <p style={{ fontSize: '14px' }}>Discover the shimmering lights and festive <br />sights of Asia’s holiday season.</p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 style={{ margin: '20px auto 0 120px' }}>Travel more, spend less</h1>
      <div className='travel' style={{ border: "1px solid grey", textAlign: "left", margin: '8px auto 0 120px', width: '83%', borderRadius: '.5rem' }}>
        <div style={{ padding: '7px 8px 15px 10px' }}>
          <div>
            <p>
              <b>Sign in, save money</b>
              <p>Save 10% or more at participating properties - just look for the blue Genius label</p>
            </p>
            <button style={{ backgroundColor: 'rgb(0,60,145)', color: '#fff', borderRadius: '.2rem', borderColor: 'rgb(0,60,145)', height: '35px', width: '70px' }}>
              Sign in
            </button>
            <button style={{ backgroundColor: '#fff', color: 'rgb(0,60,145)', margin: '0 10px', border: 'none' }}>
              <b>Register</b>
            </button>
            <img
              src='https://t-cf.bstatic.com/design-assets/assets/v3.125.0/illustrations-traveller/GeniusGenericGiftBox.png'
              alt="giftbox_image"
              style={{
                width: "9%",
                float: "right",
                margin: "-80px 20px 5px 0",
              }}
            />
          </div>
        </div>
      </div>
      <div className='travel' style={{ border: "1px solid grey", margin: '8px auto 0 120px', width: '83%', borderRadius: '.5rem', height: '45vh', display: 'flex', position: 'relative', backgroundColor: 'white', alignItems: 'center' }}>

        {/* Orange circle positioned half outside */}
        <div style={{ position: 'absolute', top: '68%', transform: 'translateY(-50%)' }}>
          <div style={{ height: '80px', width: '40px', backgroundColor: 'orange', borderRadius: '0 5rem 5rem 0' }}>
          </div>
        </div>

        {/* Text Section */}
        <div style={{ flex: 1, color: 'white', textAlign: 'center', backgroundColor: '#0066cc', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '7rem', margin: '0 10px 0 200px', width: '100px' }}>
          <h2>Find <span style={{ fontWeight: 'bold' }}>apartments</span><br /> for your next trip</h2>
          <button style={{ backgroundColor: 'white', color: '#0066cc', border: 'none', padding: '10px 20px', borderRadius: '.5rem', cursor: 'pointer', width: '220px', marginLeft: '27%' }}>
            Discover homes
          </button>
        </div>

        {/* Image Section */}
        <div style={{ width: '40%', margin: '0 -50px 0 0' }}>
          <img
            src='https://cf.bstatic.com/psb/capla/static/media/bh_aw_cpg_main_image.b4347622.png'
            alt="image"
            style={{
              width: "80%",
              borderRadius: '0',
            }}
          />
        </div>
      </div>
      <div className='destinations' style={{ margin: '-10px auto 0 120px', width: '80%' }}>
        <h1>Destinations we love</h1>
        <div style={{ display: 'flex' }}>
          <div style={{ border: '1px solid rgb(65,135,255)', backgroundColor: 'rgb(235,245,255)', borderRadius: '1.2rem', height: '40px', width: '100px', margin: '10px 10px 0 0', justifyContent: 'center', borderWidth: '1.8px', color: 'rgb(65,135,255)', display: 'flex' }}>
            <p style={{ margin: '5px 0 0 0' }}>Regions</p>
          </div>
          <div style={{ margin: '10px 10px 0 20px', textAlign: 'center' }}>
            <p style={{ margin: '5px 0 0 0' }}>Cities</p>
          </div>
          <div style={{ margin: '10px 10px 0 20px', textAlign: 'center' }}>
            <p style={{ margin: '5px 0 0 0' }}>Place of interest</p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h4 style={{ marginBottom: '-10px' }}>Lake District</h4>
            <p>2,461 properties</p>
            <h4 style={{ marginBottom: '-10px' }}>Phuket Province</h4>
            <p>5,547 properties</p>
            <h4 style={{ marginBottom: '-10px' }}>Zanzibar</h4>
            <p>882 properties</p>
            <h4 style={{ marginBottom: '-10px' }}>Texel</h4>
            <p>411 properties</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '-10px' }}>Hawai</h4>
            <p>5,452 properties</p>
            <h4 style={{ marginBottom: '-10px' }}>Bora Bora</h4>
            <p>69 properties</p>
            <h4 style={{ marginBottom: '-10px' }}>Bihar</h4>
            <p>781 properties</p>
            <h4 style={{ marginBottom: '-10px' }}>England</h4>
            <p>80,602 properties</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '-10px' }}>Mykonos</h4>
            <p>1,455 properties</p>
            <h4 style={{ marginBottom: '-10px' }}>Bali</h4>
            <p>13,206 properties</p>
            <h4 style={{ marginBottom: '-10px' }}>Guernsey</h4>
            <p>64 properties</p>
            <h4 style={{ marginBottom: '-10px' }}>Cornwall</h4>
            <p>5,459 properties</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '-10px' }}>Uttar Pradesh</h4>
            <p>4,463 properties</p>
            <h4 style={{ marginBottom: '-10px' }}>Santorini</h4>
            <p>1,794 properties</p>
            <h4 style={{ marginBottom: '-10px' }}>Jersey</h4>
            <p>90 properties</p>
            <h4 style={{ marginBottom: '-10px' }}>Tenerife</h4>
            <p>9,735 properties</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '-10px' }}>Ras Al Khaimah</h4>
            <p>117 properties</p>
            <h4 style={{ marginBottom: '-10px' }}>Ibiza</h4>
            <p>1,642 properties</p>
            <h4 style={{ marginBottom: '-10px' }}>Isle of Wight</h4>
            <p>961 properties</p>
          </div>
        </div>
      </div>
      <div style={{ margin: '40px auto 0 120px', width: '80%' }}>
        <p style={{ fontSize: '12px' }}>Countries .
          Regions .
          Cities .
          Districts .
          Airports .
          Hotels .
          Places of interest .
          Holiday Homes .
          Apartments .
          Resorts .
          Villas .
          Hostels .
          B&Bs .
          Guest Houses .
          Unique places to stay .
          All destinations .<br /><br />
          All flight destinations .
          All car hire locations .
          All holiday destinations .
          Guides .
          Discover .
          Reviews .
          Discover monthly stays</p>
      </div>
      <div style={{ backgroundColor: 'rgb(245,245,245)' }}>
        <div className='footer' style={{ margin: '-1px auto 0 120px', width: '80%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ marginBottom: '-10px', fontSize: '14px' }}>Support</h4>
              <p style={{ fontSize: '13.5px' }}>Coronavirus (COVID-19) FAQs</p>
              <p style={{ fontSize: '13.5px' }}>Manage your trips</p>
              <p style={{ fontSize: '13.5px' }}>Contact customer service</p>
              <p style={{ fontSize: '13.5px' }}>Safety resource center</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '-10px', fontSize: '14px' }}>Discover</h4>
              <p style={{ fontSize: '13.5px' }}>Genius loyalty programme
              </p>
              <p style={{ fontSize: '13.5px' }}>Seasonal and holiday deals

              </p>
              <p style={{ fontSize: '13.5px' }}>Travel articles

              </p>
              <p style={{ fontSize: '13.5px' }}>Booking.com for Business
              </p>
              <p style={{ fontSize: '13.5px' }}>Traveller Review Awards</p>
              <p style={{ fontSize: '13.5px' }}>Car hire</p>
              <p style={{ fontSize: '13.5px' }}>Flight finder
              </p>
              <p style={{ fontSize: '13.5px' }}>Restaurant reservations
              </p>
              <p style={{ fontSize: '13.5px' }}>Booking.com for Travel Agents</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '-10px', fontSize: '14px' }}>Mykonos</h4>
              <p style={{ fontSize: '13.5px' }}>Privacy & cookies
              </p>
              <p style={{ fontSize: '13.5px' }}>Terms and conditions
              </p>
              <p style={{ fontSize: '13.5px' }}>Grievance officer
              </p>
              <p style={{ fontSize: '13.5px' }}>Modern Slavery Statement
              </p>
              <p style={{ fontSize: '13.5px' }}>Human Rights Statement</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '-10px', fontSize: '14px' }}>Uttar Pradesh</h4>
              <p style={{ fontSize: '13.5px' }}>Extranet login
              </p>
              <p style={{ fontSize: '13.5px' }}>Partner help
              </p>
              <p style={{ fontSize: '13.5px' }}>List your property
              </p>
              <p style={{ fontSize: '13.5px' }}>Become an affiliate</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '-10px', fontSize: '14px' }}>Ras Al Khaimah</h4>
              <p style={{ fontSize: '13.5px' }}>About Booking.com
              </p>
              <p style={{ fontSize: '13.5px' }}>How we work
              </p>
              <p style={{ fontSize: '13.5px' }}>Sustainability
              </p>
              <p style={{ fontSize: '13.5px' }}>Press centre
              </p>
              <p style={{ fontSize: '13.5px' }}>Careers
              </p>
              <p style={{ fontSize: '13.5px' }}>Investor relations
              </p>
              <p style={{ fontSize: '13.5px' }}>Corporate contact</p>
            </div>
          </div>
        </div>
        <div style={{ margin: '-1px auto 0 110px', width: '80%', display: 'flex' }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1J4X8LJ0h28DpeUykXQcMiNAXXWLhvhW0g&s" alt="flag" style={{ height: '25px', width: '25px', margin: '10px 40px 0 15px', borderRadius: '1rem', objectFit: 'cover' }} />
          <h4 style={{ marginTop: '10px' }}>INR</h4>
        </div>
        <hr style={{ width: '80%', backgroundColor: 'lightgrey', border: 'none', height: '1px'}}/>
        <div>
          <div style={{ textAlign: 'center', fontSize: '12px' }}>
            <p>Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.<br />
              Copyright © 1996–2024 Booking.com™. All rights reserved.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '-15px 0' }}>
            <div style={{ margin: '0 5px 0 5px' }}>
              <h4 style={{ color: 'rgb(0,60,145)' }}>Booking.com</h4>
            </div>
            <div style={{ margin: '0 5px 0 25px' }}>
              <h4 style={{ color: 'rgb(0,150,255)' }}>priceline<sup style={{ fontSize: '7px' }}>R</sup></h4>
            </div>
            <div style={{ display: 'flex', margin: '2px 5px 0 25px' }}>
              <div style={{ margin: '0 1px' }}>
                <h5 style={{ color: 'white', background: 'orange', width: '15px', height: '18px', textAlign: 'center' }}>K</h5>
              </div>
              <div style={{ margin: '0 1px' }}>
                <h5 style={{ color: 'white', background: 'orange', width: '15px', height: '18px', textAlign: 'center' }}>A</h5>
              </div>
              <div style={{ margin: '0 1px' }}>
                <h5 style={{ color: 'white', background: 'orange', width: '15px', height: '18px', textAlign: 'center' }}>Y</h5>
              </div>
              <div style={{ margin: '0 1px' }}>
                <h5 style={{ color: 'white', background: 'orange', width: '15px', height: '18px', textAlign: 'center' }}>A</h5>
              </div>
              <div style={{ margin: '0 1px' }}>
                <h5 style={{ color: 'white', background: 'orange', width: '15px', height: '18px', textAlign: 'center' }}>K</h5>
              </div>
            </div>
            <div style={{ margin: '0 5px 0 25px' }}>
              <h5>agoda</h5>
              <div style={{ margin: '-30px 0 0 0' }}>
                <FaCircle style={{ fontSize: '6px', color: 'red', margin: '0 1px' }} />
                <FaCircle style={{ fontSize: '6px', color: 'orange', margin: '0 1px' }} />
                <FaCircle style={{ fontSize: '6px', color: 'green', margin: '0 1px' }} />
                <FaCircle style={{ fontSize: '6px', color: 'purple', margin: '0 1px' }} />
                <FaCircle style={{ fontSize: '6px', color: 'blue', margin: '0 1px' }} />
              </div>
            </div>
            <div style={{ display: 'flex', margin: '0 5px 0 25px' }}>
              <div style={{ margin: '22px 0' }}>
                <FaCircle style={{ fontSize: '4px', color: 'red', margin: '-0 2px 5px 0' }} />
                <FaDotCircle style={{ color: 'red', margin: '0 1px' }} />
              </div>
              <h5>OpenTable</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
