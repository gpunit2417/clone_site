import React from 'react'

function Travel() {
  return (
    <div>
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
    </div>
  )
}

export default Travel