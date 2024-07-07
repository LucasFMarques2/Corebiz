import styles from './Header.module.css'

import iconCoreBiz from '../../assets/iconCorebiz.svg';
import { IoSearch,IoMenu  } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

import { useState } from 'react';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className={styles.header}>
            <header>
                <button className={styles.menuButton} onClick={toggleMenu}>
                    <IoMenu size={30} />
                </button>
                    <img src={iconCoreBiz} alt="Logo da corebiz" />
                
                <div className={styles.search}>
                    <input type="text" id="searchProduct" placeholder='O que está procurando?' />
                    <button type="submit"><IoSearch size={22}/></button>
                </div>
                <div className={styles.account}>
                    <a href="#"><FaRegUser size={20}/> Minha Conta</a>
                    <button><TiShoppingCart  size={20} /> <span id="cartCountSpan">{localStorage.getItem('cartCount') || 0}</span></button>
                </div>
            </header>
            
            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <a href="#"><FaRegUser size={20}/> Minha Conta</a>
                </div>
            )}
            
        </div>
    );
}