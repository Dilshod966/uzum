import React from 'react';
import rasm from '../img/rasm.jpg';
import rasm2 from '../img/icons8-star-48.png';
import './detal.css';
import rasm3 from '../img/buy.png';
const detal = () => {
    return (
        <div className='detal_box'>
            <div className='krisa'><img src={rasm} alt='detal'/></div>
            <div className='pad'>
                <div>Choynak</div>
                <div className='imgee'><img src={rasm2} alt='' /> <span>4.7 (386 baholash)</span></div>
                <div className='narx_sariq'>6 300 so'm/oy</div>
                <div className='buy'>
                    <div><span>280 000</span></div>
                    <div><p>89 000 so'm</p></div>
                    <div className='buy2'><img src={rasm3} alt=''/></div>

                </div>
            </div>
        </div>
    )
}

export default detal;