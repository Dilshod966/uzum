import { FaLayerGroup } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { BsBagCheck } from "react-icons/bs";
import { CgAdd } from "react-icons/cg";
import React from 'react';
import logo from '../img/uzum.png';
import './navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
        <div>
            <ul>
                <NavLink to="/"><li><img src={logo} alt="logo"/></li></NavLink>
                <NavLink to="/katalog"><li className="orqa_fon"><FaLayerGroup/><span>Katalog</span></li></NavLink>
                <li><input type="text" id="qidirish" placeholder="Mahsulotlarni izlash"/><button><FaSearch/></button></li>
                <NavLink to="/saralangan"><li className="orqa_fon"><FaRegHeart/><span>Saralanganlar</span></li></NavLink>
                <NavLink to="/buy"><li className="orqa_fon"><BsBagCheck/><span>Savatcha</span></li></NavLink>
                <NavLink to="/login"><li className="orqa_fon"><VscAccount/><span>Kirish</span></li></NavLink>
                <NavLink to="/register"><li className="orqa_fon"><CgAdd/><span>Ro'yhatdan O'tish</span></li></NavLink>
            </ul>
        </div>
        <div>
          
        </div>
    </header>
  )
}
