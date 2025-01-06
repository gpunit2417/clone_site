import React from 'react'

function ListProperty() {
    return (
        <div>
            <div className="header" style={{ backgroundColor: 'rgb(0,60,145)', color: 'white' }}>
                <div style={{ display: 'flex', margin: '0 120px' }}>
                    <h2 style={{ marginRight: '450px', cursor: 'pointer' }}>
                        <a href='/' style={{ color: 'white', textDecoration: 'none' }}>Booking.com</a></h2>
                </div>
            </div>

            <div className="main"></div>

            <div className="footer"></div>
        </div>
    )
}

export default ListProperty