import React from 'react'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div>
      <nav id="navbar" className="bg-black">
        <div className="container max-w-[1280px] mx-auto py-6">
          <div className="navbar-wrapper flex align-middle justify-between">
            <div className="logo my-auto">
              <img src={logo} alt="logo" />
            </div>
            <div className="nav-items text-white font-[roboto] flex my-auto me-28">
              <ul className="flex align-middle">
                <li className="">
                  <a href="#">HOME</a>
                </li>
                <li className="ps-12">
                  <a href="#">ABOUT US</a>
                </li>
                <li className="ps-12">
                  <a href="#">SERMON</a>
                </li>
                <li className="ps-12">
                  <a href="#">BLOG</a>
                </li>
              </ul>
            </div>
            <div className="nav-btn bg-[#FFD2A4] px-12 py-5 rounded-xl ms-28">
              <a href="#" className=''>
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar