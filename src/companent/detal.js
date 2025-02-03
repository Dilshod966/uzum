import React from 'react';
import rasm from '../img/rasm.jpg';
import rasm2 from '../img/icons8-star-48.png';
import './detal.css';
import rasm3 from '../img/buy.png';
const detal = (props) => {
    return (
        <div className='detal_box'>
            <div className='krisa'><img src={rasm} alt='detal'/></div>
            <div className='pad'>
                <div>{props.name}</div>
                <div className='imgee'><img src={rasm2} alt='' /> <span>{props.baho} ({props.baholar_soni} baholash)</span></div>
                <div className='narx_sariq'>{props.narx_12} so'm/oy</div>
                <div className='buy'>
                    <div><span>{props.ilgari_bahosi}</span></div>
                    <div><p>{props.narx} so'm</p></div>
                    <div className='buy2'><img src={rasm3} alt=''/></div>

                </div>
            </div>
        </div>
        
    )
}

export default detal;