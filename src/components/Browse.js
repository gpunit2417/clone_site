import React from 'react'

function Browse() {
  return (
    <div>
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
    </div>
  )
}

export default Browse