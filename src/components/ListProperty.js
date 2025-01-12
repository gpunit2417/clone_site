import React from 'react'
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

function ListProperty() {
    return (
        <div>
            <div className="header" style={{ backgroundColor: 'rgb(0,60,145)', color: 'white' }}>
                <div style={{ display: 'flex', margin: '0 120px' }}>
                    <h2 style={{ marginRight: '600px', cursor: 'pointer' }}>
                        <a href='/' style={{ color: 'white', textDecoration: 'none' }}>Booking.com</a></h2>
                    <img src='https://q-xx.bstatic.com/backend_static/common/flags/new/48/gb.png' alt='logo' style={{ height: '25px', width: '25px', margin: '20px 0 0 15px', borderRadius: '1rem', objectFit: 'cover', cursor: 'pointer' }} />
                    <h5 style={{ margin: '22px 3px auto 10px' }}>Already a partner?</h5>
                    <button style={{ margin: '15px 0 25px 15px', border: '1px solid white', borderRadius: '5px', padding: '2px 8px', color: 'white', textDecoration: 'none', fontWeight: '500', fontSize: '.9rem', backgroundColor: 'rgb(0, 60, 145)' }}>Sign in</button>
                    <button style={{ backgroundColor: 'rgb(13, 110, 253)', color: 'white', borderColor: 'rgb(13, 110, 253)', margin: '15px 15px 25px 15px', borderRadius: '5px', width: '60px' }}>Help</button>
                </div>

                <div style={{ backgroundColor: 'rgb(18, 122, 27)', width: '27%', margin: '-30px auto auto 110px', textAlign: 'center', borderRadius: '5px' }}>
                    <h5 style={{ padding: '10px' }}>Join 29,279,209 other listings already on Booking.com</h5>
                </div>

                <div style={{ display: 'flex' }}>
                    <div style={{ margin: '30px 50px auto 120px' }}>
                        <p style={{ fontSize: '50px', fontWeight: '700' }}>List your</p>
                        <p style={{ color: 'rgb(13, 110, 253)', fontSize: '50px', fontWeight: '700', margin: '-50px 0' }}>apartment</p>
                        <p style={{ fontSize: '50px', fontWeight: '700' }}>on Booking.com</p>
                        <h2 style={{ fontWeight: '500', fontSize: '23px', margin: '-40px auto' }}>Whether hosting is your sideline passion or full-time job, list your home today and quickly start earning more income.</h2>
                    </div>

                    {/* <div> */}
                    <div style={{ backgroundColor: 'white', color: 'black', border: '6px solid orange', borderRadius: '7px', margin: '30px 115px 40px -1px', height: '60vh', width: '30vw' }}>
                        <h2 style={{ margin: '20px 27px 10px 27px' }}>Register for free</h2>

                        <IoCheckmarkOutline style={{ color: 'rgb(18, 122, 27)', fontSize: '1.5rem', margin: '10px 2px 1px 27px' }} />
                        <p style={{ fontSize: '.9rem', margin: '-27px 0 3px 70px' }}>
                            45% of hosts get their first booking within a week</p>

                        <IoCheckmarkOutline style={{ color: 'rgb(18, 122, 27)', fontSize: '1.5rem', margin: '13px 2px 1px 27px' }} />
                        <p style={{ fontSize: '.9rem', margin: '-35px 0 3px 70px' }}>
                            Choose between instant bookings and booking requests</p>

                        <IoCheckmarkOutline style={{ color: 'rgb(18, 122, 27)', fontSize: '1.5rem', margin: '7px 2px 1px 27px' }} />
                        <p style={{ fontSize: '.9rem', margin: '-27px 0 20px 70px' }}>
                            We'll facilitate payments for you</p>

                        <hr />

                        <button style={{ margin: '10px 0 18px 30px', backgroundColor: 'rgb(13, 110, 253)', color: 'white', border: '1px solid rgb(13, 110, 253)', borderRadius: '5px', height: '7.5vh', width: '27vw' }} >Get Started Now</button>

                        <hr />
                        <h4 style={{ margin: '10px 27px 4px 27px' }}>Already started a registration?</h4>
                        <p style={{ margin: '-2px 27px 10px 27px', fontSize: '.9rem' }}><a href='/xyz' style={{ textDecoration: 'none', color: 'rgb(13, 110, 253)', fontWeight: '500' }}>Continue your registration</a></p>
                        {/* </div> */}
                    </div>
                </div>
            </div>

            <div className="main" >
                <div style={{ margin: '70px 120px 0 120px' }}>
                    <div>
                        <p style={{ fontSize: '50px', fontWeight: '700' }}>List with peace of mind</p>
                    </div>
                    <div style={{ display: 'flex', marginTop: '-20px' }}>
                        <div>
                            <div style={{ marginBottom: '27px' }}>
                                <IoCheckmarkCircleOutline style={{ fontSize: '35px' }} />
                                <h3 style={{ margin: '-35px 0 0 50px' }}>Damage payments</h3>
                                <p style={{ margin: '3px 0 0 50px' }}>Our <a style={{ color: 'rgb(13, 110, 253)' }}>damage programme</a> covers your property in case of damages.</p>
                            </div>
                            <div style={{ marginBottom: '27px' }}>
                                <IoCheckmarkCircleOutline style={{ fontSize: '35px' }} />
                                <h3 style={{ margin: '-35px 0 0 50px' }}>Your own house rules</h3>
                                <p style={{ margin: '3px 0 0 50px' }}>Communicate your house rules to potential guests who must agree to them in order to book.</p>
                            </div>
                            <div style={{ marginBottom: '27px' }}>
                                <IoCheckmarkCircleOutline style={{ fontSize: '35px' }} />
                                <h3 style={{ margin: '-35px 0 0 50px' }}>Choose how you prefer to recieve bookings</h3>
                                <p style={{ margin: '3px 0 0 50px' }}>Either by letting guests book instantly, or by <a style={{ color: 'rgb(13, 110, 253)' }}>reviewing booking requests</a> before accepting them.</p>
                            </div>
                            <div style={{ marginBottom: '27px' }}>
                                <IoCheckmarkCircleOutline style={{ fontSize: '35px' }} />
                                <h3 style={{ margin: '-35px 0 0 50px' }}>Protection from liability claims</h3>
                                <p style={{ margin: '3px 0 0 50px' }}>Receive <a style={{ color: 'rgb(13, 110, 253)' }}>protection against liability claims</a> from guests and<br /> neighbours of up to €/£/$1,000,000 for each reservation.</p>
                            </div>
                            <button style={{ padding: '15px', backgroundColor: 'rgb(13, 120, 255)', color: 'white', border: '2px solid rgb(13, 110, 253)', borderRadius: '5px', fontSize: '15px', fontWeight: '500' }}>List with peace of mind today</button>
                        </div>
                        <div style={{ margin: '0 -30px 0 40px' }}>
                            <div style={{ marginBottom: '27px' }}>
                                <IoCheckmarkCircleOutline style={{ fontSize: '35px' }} />
                                <h3 style={{ margin: '-35px 0 0 50px' }}>Get paid and secure your finances</h3>
                                <p style={{ margin: '3px 0 0 50px' }}>Get guaranteed payouts and fraud protection through <a style={{ color: 'rgb(13, 110, 253)' }}>Payments by Booking.com</a>.</p>
                            </div>
                            <div style={{ marginBottom: '27px' }}>
                                <IoCheckmarkCircleOutline style={{ fontSize: '35px' }} />
                                <h3 style={{ margin: '-35px 0 0 50px' }}>Verified guests</h3>
                                <p style={{ margin: '3px 0 0 50px' }}>We verify guests email addresses and credit cards for partners on Payments by Booking.com.</p>
                            </div>
                            <div style={{ marginBottom: '27px' }}>
                                <IoCheckmarkCircleOutline style={{ fontSize: '35px' }} />
                                <h3 style={{ margin: '-35px 0 0 50px' }}>Robust Support</h3>
                                <p style={{ margin: '3px 0 0 50px' }}>Access support in 45 languages and manage your property through Pulse, our app for partners like you.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: 'rgb(240, 240, 240)' }}>
                    <div style={{ margin: '40px 0 0 120px', paddingTop: '30px' }}>
                        <p style={{ fontSize: '50px', fontWeight: '700', margin: '' }}>Stand out from the start</p>
                    </div>
                    <div style={{ display: 'flex', margin: '-20px 0 0 0' }}>
                        <div style={{ width: '25vw', margin: '0 50px 40px 120px' }}>
                            <img src="https://t-cf.bstatic.com/design-assets/assets/v3.138.1/illustrations-partner-thumbnails/Review.png" alt="" />
                            <h3>Import your reviews</h3>
                            <p style={{ margin: '-12px 0 20px 0', lineHeight: '23px' }}>We import your review score from other platforms and display it on your Booking.com property page, so you don’t start at zero reviews.</p>
                            <button style={{ padding: '10px', backgroundColor: 'rgb(13, 120, 255)', color: 'white', border: '2px solid rgb(13, 100, 255)', borderRadius: '5px', fontSize: '15px', fontWeight: '500' }}>Import your listing</button>
                        </div>
                        <div style={{ width: '25vw', margin: '0 30px 0 0' }}>
                            <img src="https://t-cf.bstatic.com/design-assets/assets/v3.138.1/illustrations-partner-thumbnails/Puzzle.png" alt="" />
                            <h3>Import your property details</h3>
                            <p style={{ margin: '-12px 0 0 0', lineHeight: '23px' }}>Seamlessly import your property details and sync your availability calendar with other platforms to make it easy to list and avoid double bookings.</p>
                        </div>
                        <div style={{ width: '23vw' }}>
                            <img src="https://t-cf.bstatic.com/design-assets/assets/v3.138.1/illustrations-partner-thumbnails/Search.png" alt="" />
                            <h3>Stand out in the market</h3>
                            <p style={{ margin: '-12px 0 0 0', lineHeight: '20px' }}>The ‘New to Booking.com’ label helps you stand out in our search results.</p>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: 'url(https://r-xx.bstatic.com/cdata/joinapp/world_map.svg)' }}>
                    <div style={{ margin: '76px 0 0 120px' }}>
                        <p style={{ fontSize: '47px', fontWeight: '700' }}>Reach a unique global customer base</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ margin: '-40px 20px 50px 120px' }}>
                            <div>
                                <p style={{ fontSize: '45px', fontWeight: '700' }}>2/3</p>
                                <p style={{ margin: '-40px 0 94px 0' }}>of holiday rental guests return to book with us again</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '45px', fontWeight: '700' }}>33%</p>
                                <p style={{ margin: '-40px 0 30px 0' }}>of holiday rental customers are at Genius Level 2 or 3. These travellers tend to spend more and book directly on our platform.</p>
                            </div>
                            <button style={{ padding: '15px', backgroundColor: 'rgb(13, 120, 255)', color: 'white', border: '2px solid rgb(13, 110, 253)', borderRadius: '5px', fontSize: '15px', fontWeight: '500' }}>Grow your customer base</button>
                        </div>
                        <div style={{ margin: '-45px 120px 10px 70px' }}>
                            <div>
                                <p style={{ fontSize: '45px', fontWeight: '700' }}>48%</p>
                                <p style={{ margin: '-40px 0 75px 0' }}>of nights booked by travellers at the end of 2023 were for international stays.</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '45px', fontWeight: '700' }}>30%</p>
                                <p style={{ margin: '-40px 0 4px 0' }}>of all nights booked on our platform were at a holiday rental. More and more travellers flex book both hotels and alternative accommodation.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: 'rgb(240, 240, 240)' }}>
                    <div style={{ margin: '0 0 0 120px', paddingTop: '40px' }}>
                        <p style={{ fontSize: '50px', fontWeight: '700' }}>What hosts like you say</p>
                    </div>
                    <div style={{ display: 'flex', margin: '0 120px', paddingBottom: '50px' }}>
                        <div style={{ width: '30vw' }}>
                            <div style={{ border: '2px solid orange', borderRadius: '5px', margin: '0 20px 70px 0', backgroundColor: '#fff' }}>
                                <p style={{ fontSize: '.9rem', margin: '15px 10px 25px 15px' }}>“I was able to list within 15 minutes, and no more than two hours later, I had my first booking!”</p>
                                <img src="https://xx.bstatic.com/xdata/e/xphoto/max1024x100/Ukyc4Gwipc8i5A_1fBPHdxgI7Yu5yIKj7ShaZze2j_QHDEvQlQrUm_ZXUHgsDGecDmjBfbptfqP5pihKsEhz26lCZI7nnEP0kH1pmN7i.jpg" alt="" style={{
                                    width: '60px', // Set the width to make the image square
                                    height: '60px', // Height must match width
                                    borderRadius: '50%', // Makes it circular
                                    objectFit: 'cover',
                                    margin: '0 0 10px 15px'
                                }} />
                                <h5 style={{ margin: '-60px 0 5px 88px' }}>Parley Rose</h5>
                                <p style={{ fontSize: '.75rem', margin: '-1px 0 25px 88px' }}>UK-based host</p>
                            </div>
                            <div style={{ border: '2px solid orange', borderRadius: '5px', margin: '30px 20px 25px 0', backgroundColor: '#fff' }}>
                                <p style={{ fontSize: '.9rem', margin: '15px 10px 25px 15px' }}>“Travellers come to Charming Lofts from all over the world. Booking.com really helps with that. Unlike some other platforms, it's multinational and caters to a much larger audience. For me, that was a real game-changer.”</p>
                                <img src="https://xx.bstatic.com/xdata/e/xphoto/max600x120/Ukuc4Gwipc8i5MpkasdbWZXwRW2b-NKOV1BoXXjrUFjSx_oyNFEkzze_bg6haOnPb0kCxtdGSoKDXFMNyBw0pUgNt-L4ge4hSRhYuKg=.jpg" alt="" style={{
                                    width: '60px', // Set the width to make the image square
                                    height: '60px', // Height must match width
                                    borderRadius: '50%', // Makes it circular
                                    objectFit: 'cover',
                                    margin: '0 0 10px 15px'
                                }} />
                                <h5 style={{ margin: '-60px 0 5px 88px' }}>Louis Gonzalez</h5>
                                <p style={{ fontSize: '.75rem', margin: '-1px 0 25px 88px' }}>Charming Lofts, Los Angeles</p>
                            </div>

                            <button style={{ padding: '10px', backgroundColor: 'rgb(13, 120, 255)', color: 'white', border: '2px solid rgb(13, 100, 255)', borderRadius: '5px', fontSize: '15px', fontWeight: '500' }}>Join hosts like you</button>
                        </div>
                        <div style={{ width: '30vw' }}>
                            <div style={{ border: '2px solid orange', borderRadius: '5px', margin: '0 10px 30px 6px', backgroundColor: '#fff' }}>
                                <p style={{ fontSize: '.9rem', margin: '15px 10px 25px 15px' }}>“Booking.com is the most straightforward [OTA] to work with. Everything is clear. It’s easy. And it frees us up to focus on the aspects that we can really add value to, like the guest experience.”</p>
                                <img src="https://xx.bstatic.com/xdata/e/xphoto/max600x120/Ukuc4Gwipc8i5CH5gAVsSjtWdunQi9-51tJLCwQPf2PGW_xGqh1WC9mkm4DI40UmWrOqC3iaI-WDrY8mGyL2ApuMLznWMrGdV4lNb18=.jpg" alt="" style={{
                                    width: '60px', // Set the width to make the image square
                                    height: '60px', // Height must match width
                                    borderRadius: '50%', // Makes it circular
                                    objectFit: 'cover',
                                    margin: '0 0 10px 15px'
                                }} />
                                <h5 style={{ margin: '-60px 0 5px 88px' }}>Martin Fieldman</h5>
                                <p style={{ fontSize: '.75rem', margin: '-1px 0 25px 88px' }}>Managing Director, Abodebed</p>
                            </div>

                            <div style={{ border: '2px solid orange', borderRadius: '5px', margin: '10px 10px 10px 6px', backgroundColor: '#fff' }}>
                                <p style={{ fontSize: '.9rem', margin: '15px 10px 25px 15px' }}>“After joining Booking.com and setting up the listing, my occupancy went up significantly and bookings were coming in five to six months in advance.”</p>
                                <img src="https://xx.bstatic.com/xdata/e/xphoto/max600x120/Ukuc4Gwipc8i5Lz1EpeaLFAoRVrkjWkJuqInmhVXyBn1VIJmr0kwpen5i0mwkkTrdi1mmdTA5YgA1GojSo7bbef9Axi9afPN815cWl0=.jpg" alt="" style={{
                                    width: '60px', // Set the width to make the image square
                                    height: '60px', // Height must match width
                                    borderRadius: '50%', // Makes it circular
                                    objectFit: 'cover',
                                    margin: '0 0 10px 15px'
                                }} />
                                <h5 style={{ margin: '-60px 0 5px 88px' }}>Zoey Berghoff</h5>
                                <p style={{ fontSize: '.75rem', margin: '-1px 0 25px 88px' }}>US-based host</p>
                            </div>
                        </div>
                        <div style={{ width: '30vw' }}>
                            <div style={{ border: '2px solid orange', borderRadius: '5px', margin: '0 10px 50px 16px', backgroundColor: '#fff' }}>
                                <p style={{ fontSize: '.9rem', margin: '15px 10px 25px 15px' }}>“Booking.com accounts for our largest share of guests and has helped get us where we are today.”</p>
                                <img src="https://xx.bstatic.com/xdata/e/xphoto/max600x120/UktFsp563N_OGPALUNtthVGWa-r1FwOhH-BJbJAJmx7L1SLmPJZGoQ8uBrkYVkhwyFMUf7CEvE_3BJ1pS80Ny3rpE1jC2f6P2ek_r4I=.jpg" alt="" style={{
                                    width: '60px', // Set the width to make the image square
                                    height: '60px', // Height must match width
                                    borderRadius: '50%', // Makes it circular
                                    objectFit: 'cover',
                                    margin: '0 0 10px 15px'
                                }} />
                                <h5 style={{ margin: '-60px 0 5px 88px' }}>Michel and Asja</h5>
                                <p style={{ fontSize: '.75rem', margin: '-1px 0 25px 88px' }}>Owners of La Maison de Souhey</p>
                            </div>
                            <div style={{ border: '2px solid orange', borderRadius: '5px', margin: '0 10px 10px 16px', backgroundColor: '#fff' }}>
                                <p style={{ fontSize: '.9rem', margin: '15px 10px 25px 15px' }}>“Getting started with Booking.com was super simple and took no time at all.”</p>
                                <img src="https://xx.bstatic.com/xdata/e/xphoto/max600x120/Ukuc4Gwipc8i5GMsGtAVVjxhdtTmFe3tRNWntQU0Skp4BuJQ1Cm_cQ7Qjq9zZPKYsb0DDiJCLVSkGoKQwqTXNJyePN0tX4xeNJNzd6E=.jpg" alt="" style={{
                                    width: '60px', // Set the width to make the image square
                                    height: '60px', // Height must match width
                                    borderRadius: '50%', // Makes it circular
                                    objectFit: 'cover',
                                    margin: '0 0 10px 15px'
                                }} />
                                <h5 style={{ margin: '-60px 0 5px 88px' }}>Shawn Ritzenthaler</h5>
                                <p style={{ fontSize: '.75rem', margin: '-1px 0 25px 88px' }}>Onwer of The Hollywood Hills Mansion</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ margin: '60px 120px 40px 120px' }}>
                    <div>
                        <p style={{ fontSize: '50px', fontWeight: '700' }}>Your questions answered</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ margin: '-20px 30px 0 0', width: '50%' }}>
                            <hr />
                            <p style={{ fontWeight: '700', fontSize: '1.25rem', width: '35vw' }}>What happens if my property is damaged by a guest?</p><FaChevronDown style={{ float: 'right', marginTop: '-55px' }} />

                            <hr />
                            <p style={{ margin: '30px 0 50px 0' }}>Still have questions? Find answers to all your questions on our <a style={{ color: 'rgb(13, 110, 253)' }}>FAQ</a></p>
                            <button style={{ padding: '10px', backgroundColor: 'rgb(13, 120, 255)', color: 'white', border: '2px solid rgb(13, 100, 255)', borderRadius: '5px', fontSize: '15.5px', fontWeight: '700' }}>Start welcoming guests</button>
                        </div>
                        <div style={{ margin: '-20px 30px 0 0', width: '50%' }}>
                            <hr />
                            <p style={{ fontWeight: '700', fontSize: '1.25rem', width: '35vw' }}>When will my property go online?</p><FaChevronDown style={{ float: 'right', marginTop: '-40px' }} />

                            <hr />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div>
                    <div>
                        <p>Sign up and start welcoming guests today!</p>
                    </div>
                    <div style={{ backgroundColor: 'white', color: 'black', border: '6px solid orange', borderRadius: '7px', margin: '30px 115px 40px -1px', height: '60vh', width: '30vw' }}>
                        <h2 style={{ margin: '20px 27px 10px 27px' }}>Register for free</h2>

                        <IoCheckmarkOutline style={{ color: 'rgb(18, 122, 27)', fontSize: '1.5rem', margin: '10px 2px 1px 27px' }} />
                        <p style={{ fontSize: '.9rem', margin: '-27px 0 3px 70px' }}>
                            45% of hosts get their first booking within a week</p>

                        <IoCheckmarkOutline style={{ color: 'rgb(18, 122, 27)', fontSize: '1.5rem', margin: '13px 2px 1px 27px' }} />
                        <p style={{ fontSize: '.9rem', margin: '-35px 0 3px 70px' }}>
                            Choose between instant bookings and booking requests</p>

                        <IoCheckmarkOutline style={{ color: 'rgb(18, 122, 27)', fontSize: '1.5rem', margin: '7px 2px 1px 27px' }} />
                        <p style={{ fontSize: '.9rem', margin: '-27px 0 20px 70px' }}>
                            We'll facilitate payments for you</p>

                        <hr />

                        <button style={{ margin: '10px 0 18px 30px', backgroundColor: 'rgb(13, 110, 253)', color: 'white', border: '1px solid rgb(13, 110, 253)', borderRadius: '5px', height: '7.5vh', width: '27vw' }} >Get Started Now</button>

                        <hr />
                        <h4 style={{ margin: '10px 27px 4px 27px' }}>Already started a registration?</h4>
                        <p style={{ margin: '-2px 27px 10px 27px', fontSize: '.9rem' }}><a href='/xyz' style={{ textDecoration: 'none', color: 'rgb(13, 110, 253)', fontWeight: '500' }}>Continue your registration</a></p>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
// 	https://r-xx.bstatic.com/cdata/joinapp/world_map.svg
export default ListProperty