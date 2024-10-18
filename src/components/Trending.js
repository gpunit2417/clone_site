import React from 'react'

function Trending() {
  return (
    <div>
      <div className="trending" style={{ margin: '-10px auto 0 120px' }}>
        <div>
          <h1>Trending Destinations</h1>
          <p style={{ fontSize: '20px', margin: '-15px auto auto auto' }}>Most popular choices for travellers from India</p>
        </div>
        <div style={{ display: 'flex', width: '90%' }}>
          <div style={{ width: '50%', margin: '0 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <h2 style={{ top: '54px', position: 'relative', margin: '-31px 0 0 25px', color: 'white', textShadow: ' 1px 1px black' }}>New Delhi <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1J4X8LJ0h28DpeUykXQcMiNAXXWLhvhW0g&s" alt="flag" style={{ height: '22px', width: '35px', margin: '26px 0 0 4px', objectFit: 'cover' }} /></h2>
            <img src="https://cf2.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="trending" style={{ borderRadius: '.5rem', width: '100%', objectFit: 'cover', height: '50vh' }} />
          </div>
          <div style={{ width: '50%', margin: '0 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <h2 style={{ top: '54px', position: 'relative', margin: '-31px 0 0 25px', color: 'white', textShadow: ' 1px 1px black' }}>Bangalore <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1J4X8LJ0h28DpeUykXQcMiNAXXWLhvhW0g&s" alt="flag" style={{ height: '22px', width: '35px', margin: '26px 0 0 4px', objectFit: 'cover' }} /></h2>
            <img src="https://cf2.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="location" style={{ borderRadius: '.5rem', width: '100%', objectFit: 'cover', height: '50vh' }} />
          </div>
        </div>

        <div style={{ display: 'flex', width: '90%', margin: '-15px 0 0 0' }}>
          <div style={{ width: '33%', margin: '0 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <h2 style={{ top: '54px', position: 'relative', margin: '-31px 0 0 25px', color: 'white', textShadow: ' 1px 1px black' }}>Mumbai <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1J4X8LJ0h28DpeUykXQcMiNAXXWLhvhW0g&s" alt="flag" style={{ height: '22px', width: '35px', margin: '26px 0 0 4px', objectFit: 'cover' }} /></h2>
            <img src="https://cf2.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="trending" style={{ borderRadius: '.5rem', width: '100%', objectFit: 'cover', height: '40vh' }} />
          </div>
          <div style={{ width: '33%', margin: '0 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <h2 style={{ top: '54px', position: 'relative', margin: '-31px 0 0 25px', color: 'white', textShadow: ' 1px 1px black' }}>Chennai <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1J4X8LJ0h28DpeUykXQcMiNAXXWLhvhW0g&s" alt="flag" style={{ height: '22px', width: '35px', margin: '26px 0 0 4px', objectFit: 'cover' }} /></h2>
            <img src="https://cf2.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" alt="trending" style={{ borderRadius: '.5rem', width: '100%', objectFit: 'cover', height: '40vh' }} />
          </div>
          <div style={{ width: '33%', margin: '0 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <h2 style={{ top: '54px', position: 'relative', margin: '-31px 0 0 25px', color: 'white', textShadow: ' 1px 1px black' }}>Hyderabad <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1J4X8LJ0h28DpeUykXQcMiNAXXWLhvhW0g&s" alt="flag" style={{ height: '22px', width: '35px', margin: '26px 0 0 4px', objectFit: 'cover' }} /></h2>
            <img src="https://cf2.bstatic.com/xdata/images/city/600x600/684653.jpg?k=306ccafcc8a4a7e23b9e8a05b183453fe885b312a4daa5ce76ec39a1b79cbc6f&o=" alt="location" style={{ borderRadius: '.5rem', width: '100%', objectFit: 'cover', height: '40vh' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending