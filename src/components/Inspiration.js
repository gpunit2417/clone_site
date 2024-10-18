import React from 'react'

function Inspiration() {
  return (
    <div>
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
    </div>
  )
}

export default Inspiration