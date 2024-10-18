import React from 'react'

function Offer() {
  return (
    <div>
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
    </div>
  )
}

export default Offer