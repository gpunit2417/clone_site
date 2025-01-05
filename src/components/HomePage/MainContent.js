import React from 'react'
import { FaCarAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { GoPeople } from "react-icons/go";

function MainContent() {
    return (
        <div className="header" style={{ backgroundColor: 'rgb(0,60,145)', color: 'white', height: '48vh' }}>
            <div>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', border: '1px solid white', borderRadius: '2rem', marginLeft: '120px' }}>
                        <IoBedOutline style={{ margin: '18px 5px 13px 10px' }} />
                        <h3 style={{ margin: '13px 13px 13px 2px', fontWeight: '100', cursor: 'pointer' }}>Stays</h3>
                    </div>
                    <h3 style={{ margin: '13px 20px', fontWeight: '100', cursor: 'pointer' }}>Flights</h3>
                    <h3 style={{ margin: '13px 20px', fontWeight: '100', cursor: 'pointer' }}>Flight + Hotel</h3>
                    <div style={{ display: 'flex' }}>
                        <FaCarAlt style={{ margin: '18px 5px 13px 10px', fontWeight: '100' }} />
                        <h3 style={{ margin: '13px 20px 13px 2px', fontWeight: '100', cursor: 'pointer' }}>Car rentals</h3>
                    </div>
                    <h3 style={{ margin: '13px 20px', fontWeight: '100', cursor: 'pointer' }}>Attractions</h3>
                    <h3 style={{ margin: '13px 20px', fontWeight: '100', cursor: 'pointer' }}>Airport taxis</h3>
                </div>

                <div style={{ margin: '80px 0 0 120px' }}>
                    <p style={{ fontSize: '50px', fontWeight: '700' }}>Find your next stay</p>
                    <h2 style={{ fontWeight: '400', marginTop: '-50px' }}>Search low prices on hotels, homes and much more...</h2>
                </div>
            </div>

            <div>
                <div style={{ display: 'flex', border: '1px solid orange', width: '1150px', margin: '25px 0 0 120px', backgroundColor: 'orange', borderRadius: '.3rem', borderWidth: '2px' }}>
                    <div style={{ border: '2px solid orange', width: '335px', display: 'flex', borderRadius: '.3rem', borderWidth: '2px', backgroundColor: 'white', color: 'black' }}>
                        <IoBedOutline style={{ margin: '23px 0 13px 10px' }} />
                        <h5 style={{ marginLeft: '2px', cursor: 'pointer' }}>Where are you going?</h5>
                    </div>

                    <div style={{ border: '2px solid orange', width: '335px', display: 'flex', borderRadius: '.3rem', borderWidth: '2px', backgroundColor: 'white', color: 'black' }}>
                        <SlCalender style={{ margin: '23px 0 13px 10px' }} />
                        <h5 style={{ marginLeft: '2px', cursor: 'pointer' }}>Check-in date - Check-out date</h5>
                    </div>

                    <div style={{ border: '2px solid orange', width: '335px', display: 'flex', borderRadius: '.3rem', borderWidth: '2px', backgroundColor: 'white', color: 'black' }}>
                        <GoPeople style={{ margin: '23px 0 13px 10px' }} />
                        <h5 style={{ marginLeft: '2px', cursor: 'pointer' }}>2 adults. 0 children. 1 room</h5>
                    </div>

                    <button style={{ width: '145px', backgroundColor: 'rgb(0,62,255)', borderRadius: '.3rem', borderWidth: '2px', border: '1px solid orange', color: 'white', cursor: 'pointer' }}>Search</button>
                </div>
            </div>

            <div style={{ margin: '10px auto auto 120px', color: 'black' }}>
                <input type='checkbox' />
                <label>I am looking for flights</label>
            </div>
        </div >
    )
}

export default MainContent