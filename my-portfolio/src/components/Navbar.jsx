import React from 'react'
import logo from '../assets/HEK.png'

function Navbar() {
    return (
        <section>
            <nav className='flex justify-around items-center mt-2'>
                <div>
                    <a href="/">
                        <img className='w-[50px] h-[50px]' src={logo} alt="portfolio_logo" />
                    </a>
                </div>
                <div>
                    <a href="">My Bio</a>
                    <a className='ml-3' href="">Projects</a>
                    <a className='ml-3' href="">Contact</a>
                </div>
            </nav>
        </section>
    )
}

export default Navbar