import React, { useState, useEffect } from 'react';
import logo from '../assets/HEK.png'
import '../styles/Navbar.css'


function Navbar() {

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY > 90) {
            setColor(true);
        } else {
            setColor(false);
        }
    };


    window.addEventListener('scroll', changeColor)


    return (
        <section>
            <nav className={color ? 'header header-bg' : 'header'}>
                <div>
                    <a href="/">
                        <img className='w-[50px] h-[50px]' src={logo} alt="portfolio_logo" />
                    </a>
                </div>
                <div className='font-serif font-bold text-sm'>
                    <a className='hover:underline underline-offset-1 transition duration-700' href="">My Bio</a>
                    <a className='ml-3 hover:underline underline-offset-1 transition duration-700' href="">Resume</a>
                    <a className='ml-3 hover:underline underline-offset-1 transition duration-700' href="">Projects</a>
                    <a className='ml-3 hover:underline underline-offset-1 transition duration-700' href="">Contact</a>
                </div>
            </nav>
        </section >
    )
}

export default Navbar