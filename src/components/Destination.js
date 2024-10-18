import React from 'react'

function Destination() {
    return (
        <div>
            <div className='destinations' style={{ margin: '-10px auto 0 120px', width: '80%' }}>
                <h1>Destinations we love</h1>
                <div style={{ display: 'flex' }}>
                    <div style={{ border: '1px solid rgb(65,135,255)', backgroundColor: 'rgb(235,245,255)', borderRadius: '1.2rem', height: '40px', width: '100px', margin: '10px 10px 0 0', justifyContent: 'center', borderWidth: '1.8px', color: 'rgb(65,135,255)', display: 'flex' }}>
                        <p style={{ margin: '5px 0 0 0' }}>Regions</p>
                    </div>
                    <div style={{ margin: '10px 10px 0 20px', textAlign: 'center' }}>
                        <p style={{ margin: '5px 0 0 0' }}>Cities</p>
                    </div>
                    <div style={{ margin: '10px 10px 0 20px', textAlign: 'center' }}>
                        <p style={{ margin: '5px 0 0 0' }}>Place of interest</p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <h4 style={{ marginBottom: '-10px' }}>Lake District</h4>
                        <p>2,461 properties</p>
                        <h4 style={{ marginBottom: '-10px' }}>Phuket Province</h4>
                        <p>5,547 properties</p>
                        <h4 style={{ marginBottom: '-10px' }}>Zanzibar</h4>
                        <p>882 properties</p>
                        <h4 style={{ marginBottom: '-10px' }}>Texel</h4>
                        <p>411 properties</p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '-10px' }}>Hawai</h4>
                        <p>5,452 properties</p>
                        <h4 style={{ marginBottom: '-10px' }}>Bora Bora</h4>
                        <p>69 properties</p>
                        <h4 style={{ marginBottom: '-10px' }}>Bihar</h4>
                        <p>781 properties</p>
                        <h4 style={{ marginBottom: '-10px' }}>England</h4>
                        <p>80,602 properties</p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '-10px' }}>Mykonos</h4>
                        <p>1,455 properties</p>
                        <h4 style={{ marginBottom: '-10px' }}>Bali</h4>
                        <p>13,206 properties</p>
                        <h4 style={{ marginBottom: '-10px' }}>Guernsey</h4>
                        <p>64 properties</p>
                        <h4 style={{ marginBottom: '-10px' }}>Cornwall</h4>
                        <p>5,459 properties</p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '-10px' }}>Uttar Pradesh</h4>
                        <p>4,463 properties</p>
                        <h4 style={{ marginBottom: '-10px' }}>Santorini</h4>
                        <p>1,794 properties</p>
                        <h4 style={{ marginBottom: '-10px' }}>Jersey</h4>
                        <p>90 properties</p>
                        <h4 style={{ marginBottom: '-10px' }}>Tenerife</h4>
                        <p>9,735 properties</p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '-10px' }}>Ras Al Khaimah</h4>
                        <p>117 properties</p>
                        <h4 style={{ marginBottom: '-10px' }}>Ibiza</h4>
                        <p>1,642 properties</p>
                        <h4 style={{ marginBottom: '-10px' }}>Isle of Wight</h4>
                        <p>961 properties</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination