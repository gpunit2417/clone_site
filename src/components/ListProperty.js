import React from 'react'
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

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
                        <p style={{fontSize: '50px', fontWeight: '700'}}>List your</p>
                        <p style={{ color: 'rgb(13, 110, 253)', fontSize: '50px', fontWeight: '700', margin: '-50px 0' }}>apartment</p>
                        <p style={{fontSize: '50px', fontWeight: '700'}}>on Booking.com</p>
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

                        <button style={{margin: '10px 0 18px 30px', backgroundColor: 'rgb(13, 110, 253)', color: 'white', border: '1px solid rgb(13, 110, 253)', borderRadius: '5px', height: '7.5vh', width: '27vw'}} >Get Started Now</button>

                        <hr />
                        <h4 style={{ margin: '10px 27px 4px 27px' }}>Already started a registration?</h4>
                        <p style={{ margin: '-2px 27px 10px 27px', fontSize: '.9rem' }}><a href='/xyz' style={{textDecoration: 'none', color: 'rgb(13, 110, 253)', fontWeight: '500'}}>Continue your registration</a></p>
                        {/* </div> */}
                    </div>
                </div>
            </div>

            <div className="main" style={{margin: 'auto 120px'}}>
                <div style={{marginTop: '70px'}}>
                    <div>
                        <p style={{fontSize: '50px', fontWeight: '700'}}>List with peace of mind</p>
                    </div>
                    <div style={{display: 'flex', marginTop: '-20px'}}>
                        <div>
                            <div style={{marginBottom: '27px'}}>
                                <IoCheckmarkCircleOutline style={{fontSize: '35px'}}/>
                                <h3 style={{margin: '-35px 0 0 50px'}}>Damage payments</h3>
                                <p style={{margin: '3px 0 0 50px'}}>Our <a style={{color: 'rgb(13, 110, 253)'}}>damage programme</a> covers your property in case of damages.</p>
                            </div>
                            <div style={{marginBottom: '27px'}}>
                                <IoCheckmarkCircleOutline style={{fontSize: '35px'}}/>
                                <h3 style={{margin: '-35px 0 0 50px'}}>Your own house rules</h3>
                                <p style={{margin: '3px 0 0 50px'}}>Communicate your house rules to potential guests who must agree to them in order to book.</p>
                            </div>
                            <div style={{marginBottom: '27px'}}>
                                <IoCheckmarkCircleOutline style={{fontSize: '35px'}}/>
                                <h3 style={{margin: '-35px 0 0 50px'}}>Choose how you prefer to recieve bookings</h3>
                                <p style={{margin: '3px 0 0 50px'}}>Either by letting guests book instantly, or by <a style={{color: 'rgb(13, 110, 253)'}}>reviewing booking requests</a> before accepting them.</p>
                            </div>
                            <div style={{marginBottom: '27px'}}>
                                <IoCheckmarkCircleOutline style={{fontSize: '35px'}}/>
                                <h3 style={{margin: '-35px 0 0 50px'}}>Protection from liability claims</h3>
                                <p style={{margin: '3px 0 0 50px'}}>Receive <a style={{color: 'rgb(13, 110, 253)'}}>protection against liability claims</a> from guests and<br/> neighbours of up to €/£/$1,000,000 for each reservation.</p>
                            </div>
                            <button style={{padding: '15px', backgroundColor: 'rgb(13, 120, 255)', color: 'white', border: '2px solid rgb(13, 110, 253)', borderRadius: '5px', fontSize: '15px', fontWeight: '500'}}>List with peace of mind today</button>
                        </div>
                        <div style={{margin: '0 -30px 0 40px'}}>
                            <div style={{marginBottom: '27px'}}>
                                <IoCheckmarkCircleOutline style={{fontSize: '35px'}}/>
                                <h3 style={{margin: '-35px 0 0 50px'}}>Get paid and secure your finances</h3>
                                <p style={{margin: '3px 0 0 50px'}}>Get guaranteed payouts and fraud protection through <a style={{color: 'rgb(13, 110, 253)'}}>Payments by Booking.com</a>.</p>
                            </div>
                            <div style={{marginBottom: '27px'}}>
                                <IoCheckmarkCircleOutline style={{fontSize: '35px'}}/>
                                <h3 style={{margin: '-35px 0 0 50px'}}>Verified guests</h3>
                                <p style={{margin: '3px 0 0 50px'}}>We verify guests email addresses and credit cards for partners on Payments by Booking.com.</p>
                            </div>
                            <div style={{marginBottom: '27px'}}>
                                <IoCheckmarkCircleOutline style={{fontSize: '35px'}}/>
                                <h3 style={{margin: '-35px 0 0 50px'}}>Robust Support</h3>
                                <p style={{margin: '3px 0 0 50px'}}>Access support in 45 languages and manage your property through Pulse, our app for partners like you.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p style={{fontSize: '50px', fontWeight: '700'}}>Stand out from the start</p>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div>
                            <img src="https://t-cf.bstatic.com/design-assets/assets/v3.138.1/illustrations-partner-thumbnails/Review.png" alt="" />
                            <h3>Import your reviews</h3>
                            <p>We import your review score from other platforms and display it on your Booking.com property page, so you don’t start at zero reviews.</p>
                            <button>Import your listing</button>
                        </div>
                        <div>
                            <img src="https://t-cf.bstatic.com/design-assets/assets/v3.138.1/illustrations-partner-thumbnails/Puzzle.png" alt="" />
                            <h3>Import your property details</h3>
                            <p>Seamlessly import your property details and sync your availability calendar with other platforms to make it easy to list and avoid double bookings.</p>
                        </div>
                        <div>
                            <img src="https://t-cf.bstatic.com/design-assets/assets/v3.138.1/illustrations-partner-thumbnails/Search.png" alt="" />
                            <h3>Stand out in the market</h3>
                            <p>The ‘New to Booking.com’ label helps you stand out in our search results.</p>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="footer"></div>
        </div>
    )
}

export default ListProperty