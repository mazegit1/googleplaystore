import React, { useState } from 'react';
import googleplay from '../images/googleplay.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showHelpMenu, setShowHelpMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleAccountClick = () => {
    setShowAccountMenu(!showAccountMenu);
  };

  const handleHelpClick = () => {
    setShowHelpMenu(!showHelpMenu);
  };

  const handleCloseSearch = () => {
    setShowSearch(false);
  };

  const handleMobileMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="header px-20 py-2 flex items-center justify-between border-b-2 border-gray-300 shadow-md fixed w-full bg-white z-50">
      <div className="header-left flex items-center gap-4">
        <a href='/' className="wrapper">
          <img src={googleplay} className="w-36 md:w-44" alt="Google Play" />
        </a>
        <div className="hidden md:flex items-center gap-4">
          <Link to="/" className='text-lg md:text-2xl text-gray-600 underline text-[#4b9279] transition-all ease-in-out duration-200'>Игры</Link>
          <Link to="/games" className='text-lg md:text-2xl text-gray-600 hover:underline active:text-gray-50 hover:text-[#4b9279] transition-all ease-in-out duration-200'>Приложения</Link>
          <Link to="/films" className='text-lg md:text-2xl text-gray-600 hover:underline active:text-gray-50 hover:text-[#4b9279] transition-all ease-in-out duration-200'>Фильмы</Link>
          <Link to="/forkids" className='text-lg md:text-2xl text-gray-600 hover:underline active:text-gray-50 hover:text-[#4b9279] transition-all ease-in-out duration-200'>Детям</Link>
        </div>
      </div>
      <div className="header-right flex items-center gap-4 relative">
        <MenuIcon
          onClick={handleMobileMenuClick}
          className="md:hidden xl:bg-white xl:text-white scale-150 cursor-pointer text-gray-600"
          aria-label="Menu"
        />
        <div className="hidden md:flex items-center gap-4">
          <SearchIcon
            onClick={handleSearchClick}
            className="scale-150 cursor-pointer hover:text-gray-700 transition-colors"
            aria-label="Search"
          />
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={showSearch ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {showSearch && (
              <div>
                <input
                  type="search"
                  placeholder="Search..."
                  className="border p-2 rounded-lg outline-none w-64"
                  autoFocus
                  aria-label="Search input"
                />
                <CloseIcon
                  onClick={handleCloseSearch}
                  className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700"
                  aria-label="Close search"
                />
              </div>
            )}
          </motion.div>
          <div className="relative">
            <HelpOutlineIcon
              onClick={handleHelpClick}
              className="scale-150 cursor-pointer hover:text-gray-700 transition-colors"
              aria-label="Help"
            />
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={showHelpMenu ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg"
            >
              {showHelpMenu && (
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">FAQ</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact Support</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Documentation</li>
                </ul>
              )}
            </motion.div>
          </div>
          <div className="relative">
            <AccountCircleIcon
              onClick={handleAccountClick}
              className="scale-150 text-[#5C6BC0] cursor-pointer hover:text-blue-700 transition-colors"
              aria-label="Account"
            />
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={showAccountMenu ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg"
            >
              {showAccountMenu && (
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                </ul>
              )}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={showMobileMenu ? { x: 0, opacity: 1 } : { x: '-100%', opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full h-full bg-white shadow-lg z-40 md:hidden"
        >
          <div className="flex flex-col items-center pt-16">
            <CloseIcon
              onClick={handleMobileMenuClick}
              className="absolute top-4 right-4 cursor-pointer text-gray-600"
              aria-label="Close menu"
            />
            <Link to="/" className='text-2xl text-gray-600 hover:underline active:text-gray-50 hover:text-[#4b9279] transition-all ease-in-out duration-200' onClick={handleMobileMenuClick}>Игры</Link>
            <Link to="/games" className='text-2xl text-gray-600 hover:underline active:text-gray-50 hover:text-[#4b9279] transition-all ease-in-out duration-200' onClick={handleMobileMenuClick}>Приложения</Link>
            <Link to="/films" className='text-2xl text-gray-600 hover:underline active:text-gray-50 hover:text-[#4b9279] transition-all ease-in-out duration-200' onClick={handleMobileMenuClick}>Фильмы</Link>
            <Link to="/forkids" className='text-2xl text-gray-600 hover:underline active:text-gray-50 hover:text-[#4b9279] transition-all ease-in-out duration-200' onClick={handleMobileMenuClick}>Детям</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
