import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import face from './logo.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt shadow-2 br2" options={{ max: 45 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop:'5px'}} src= {face} alt='logo'/>
                </div>
            </Tilt>
        </div>
    );
}  

export default Logo;