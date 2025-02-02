import { FaLayerGroup } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { BsBagCheck } from "react-icons/bs";
import { CgAdd } from "react-icons/cg";
import React from 'react';
import logo from '../img/uzum.png';
import './navbar.css';

export default function Navbar() {
  return (
    <header>
        <div>
            <ul>
                <li><img src={logo} alt="logo"/></li>
                <li className="orqa_fon"><FaLayerGroup/><span>Katalog</span></li>
                <li><input type="text" id="qidirish" placeholder="Mahsulotlarni izlash"/><button><FaSearch/></button></li>
                <li className="orqa_fon"><FaRegHeart/><span>Saralanganlar</span></li>
                <li className="orqa_fon"><BsBagCheck/><span>Savatcha</span></li>
                <li className="orqa_fon"><VscAccount/><span>Kirish</span></li>
                <li className="orqa_fon"><CgAdd/><span>Ro'yhatdan O'tish</span></li>
            </ul>
        </div>

    </header>
  )
}
