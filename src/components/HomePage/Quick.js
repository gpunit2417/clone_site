import React from 'react'
import { CiHeart } from "react-icons/ci";
import { PiCityLight } from "react-icons/pi";
import { MdOutlineBeachAccess } from "react-icons/md";
import { LuBike } from "react-icons/lu";
function Quick() {
  return (
    <div>
      <div className="quick" style={{ margin: '-10px auto 0 120px' }}>
        <div>
          <h1>Quick and easy trip planner</h1>
          <p style={{ fontSize: '16px', margin: '-15px auto auto auto' }}>Pick a vibe and explore the top destinations in India</p>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ border: '1px solid rgb(65,135,255)', backgroundColor: 'rgb(235,245,255)', borderRadius: '1.2rem', height: '40px', width: '100px', margin: '10px 10px 0 0', textAlign: 'center', borderWidth: '1.8px', color: 'rgb(65,135,255)', display: 'flex' }}>
            <CiHeart style={{ margin: '8px 5px 0 5px' }} />
            <p style={{ margin: '5px 0 0 0' }}>Romance</p>
          </div>
          <div style={{ margin: '0 10px 0 10px', display: 'flex' }}>
            <LuBike style={{ margin: '20px 5px 0 5px' }} />
            <p>Outdoors</p>
          </div>
          <div style={{ margin: '0 10px 0 10px', display: 'flex' }}>
            <PiCityLight style={{ margin: '19px 5px 0 5px' }} />
            <p>City</p>
          </div>
          <div style={{ margin: '0 10px 0 10px', display: 'flex' }}>
            <MdOutlineBeachAccess style={{ margin: '19px 5px 0 5px' }} />
            <p>Beach</p>
          </div>
        </div>
        <div style={{ display: 'flex', width: '50%' }}>
          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140052521.jpg?k=a6bd9352c790d92b6969bcfbab4ec45793e60579c6212519ad6d4f6817e41219&o=" alt="location" style={{ width: '170px', height: '136px', borderRadius: '.5rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Nedumbassery</h4>
            <p style={{ margin: '0px' }}>74 km from Munnar</p>
          </div>

          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018250.jpg?k=7b9d3f59146dead4c932675f7c1bd5f6f4f74390c5584d00320cc51d6593ba3a&o=" alt="location" style={{ width: '170px', height: '136px', borderRadius: '.5rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Kottayam</h4>
            <p style={{ margin: '0px' }}>81 km from Munnar</p>
          </div>

          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018293.jpg?k=eba1b4abc1a196e422d559e205efd895999a9f5e643bc09544d91f9d18b30733&o=" alt="location" style={{ width: '170px', height: '136px', borderRadius: '.5rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Ernakulam</h4>
            <p style={{ margin: '0px' }}>86 km from Munnar</p>
          </div>

          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140052552.jpg?k=478b1b6119830c85ba58e1509b36890c1c9083974446f9f132aedbbed0af877d&o=" alt="location" style={{ width: '170px', height: '136px', borderRadius: '.5rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Ambalavayal</h4>
            <p style={{ margin: '0px' }}>194 km from Munnar</p>
          </div>

          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018163.jpg?k=f36cf9c92731c02afead1f697dd091271ac62ad0d1d904ad937d571b2f6a17ae&o=" alt="location" style={{ width: '170px', height: '136px', borderRadius: '.5rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Sultan Bathery</h4>
            <p style={{ margin: '0px' }}>195 km from Munnar</p>
          </div>

          <div className="places" style={{ width: '50%', margin: '20px 5px 10px 0', borderRadius: '.4rem', padding: '0 7px' }}>
            <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018181.jpg?k=8701d90839626e2b1dedfbe09dd993366c383a71b9786d3677ed8ebc61bd64a9&o=" alt="location" style={{ width: '170px', height: '136px', borderRadius: '.5rem' }} />
            <h4 style={{ margin: '5px 0px 0px 0px' }}>Salem</h4>
            <p style={{ margin: '0px' }}>212 km from Munnar</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quick