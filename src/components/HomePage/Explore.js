import React from 'react'

function Explore() {
  return (
    <div>
      <div className="explore" style={{ margin: '-10px auto 0 120px' }}>
        <div>
          <h1>Explore India</h1>
          <p style={{ fontSize: '16px', margin: '-15px auto auto auto' }}>These popular destinations have a lot to offer</p>
        </div>

        <div style={{ display: 'flex', width: '90%' }}>
          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://r-xx.bstatic.com/xdata/images/region/170x136/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=" alt="location" style={{ borderRadius: '.5rem', cursor: 'pointer' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Goa</h4>
            <p style={{ margin: '0px' }}>5,251 properties</p>
          </div>

          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://q-xx.bstatic.com/xdata/images/city/170x136/684919.jpg?k=0a73fce29109503c055e288c413d9a1c5bd66fdb26f01c1438e8017b0b64b42f&o=" alt="location" style={{ borderRadius: '.5rem', cursor: 'pointer' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Ooty</h4>
            <p style={{ margin: '0px' }}>471 properties</p>
          </div>

          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://r-xx.bstatic.com/xdata/images/city/170x136/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="location" style={{ borderRadius: '.5rem', cursor: 'pointer' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Mumbai</h4>
            <p style={{ margin: '0px' }}>1,652 properties</p>
          </div>

          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://r-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="location" style={{ borderRadius: '.5rem', cursor: 'pointer' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>New Delhi</h4>
            <p style={{ margin: '0px' }}>2,919 properties</p>
          </div>

          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://q-xx.bstatic.com/xdata/images/city/170x136/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="location" style={{ borderRadius: '.5rem', cursor: 'pointer' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Bangalore</h4>
            <p style={{ margin: '0px' }}>2,044 properties</p>
          </div>

          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://r-xx.bstatic.com/xdata/images/city/170x136/684720.jpg?k=fdb1d9397eeb9b17d4a1ef6fdf806e6b4366d5ebda38d7f0c212b9c1bec8dcea&o=" alt="location" style={{ borderRadius: '.5rem', cursor: 'pointer' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Munnar</h4>
            <p style={{ margin: '0px' }}>512 properties</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore