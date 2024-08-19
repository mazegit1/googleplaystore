import React, { useState } from 'react';
import googleplay from '../images/googleplay.png';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Transition } from '@headlessui/react';

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
    <div className="header px-4 py-2 flex items-center justify-between border-b-2 border-gray-300 shadow-md fixed w-full bg-white z-50">
      <div className="header-left flex items-center gap-4">
        <a href='/' className="wrapper">
          <img src={googleplay} className="w-24 md:w-36" alt="Google Play" />
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
          className="md:hidden scale-150 cursor-pointer text-gray-600"
          aria-label="Menu"
        />
        <div className="hidden md:flex items-center gap-4">
          <SearchIcon
            onClick={handleSearchClick}
            className="scale-150 cursor-pointer hover:text-gray-700 transition-colors"
            aria-label="Search"
          />
          <Transition
            show={showSearch}
            enter="transition ease-out duration-300 transform"
            enterFrom="scale-50 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="transition ease-in duration-200 transform"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-50 opacity-0"
          >
            <div className="relative">
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
          </Transition>
          <div className="relative">
            <HelpOutlineIcon
              onClick={handleHelpClick}
              className="scale-150 cursor-pointer hover:text-gray-700 transition-colors"
              aria-label="Help"
            />
            <Transition
              show={showHelpMenu}
              enter="transition ease-out duration-300 transform"
              enterFrom="scale-50 opacity-0"
              enterTo="scale-100 opacity-100"
              leave="transition ease-in duration-200 transform"
              leaveFrom="scale-100 opacity-100"
              leaveTo="scale-50 opacity-0"
            >
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">FAQ</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact Support</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Documentation</li>
                </ul>
              </div>
            </Transition>
          </div>
          <div className="relative">
            <AccountCircleIcon
              onClick={handleAccountClick}
              className="scale-150 text-[#5C6BC0] cursor-pointer hover:text-blue-700 transition-colors"
              aria-label="Account"
            />
            <Transition
              show={showAccountMenu}
              enter="transition ease-out duration-300 transform"
              enterFrom="scale-50 opacity-0"
              enterTo="scale-100 opacity-100"
              leave="transition ease-in duration-200 transform"
              leaveFrom="scale-100 opacity-100"
              leaveTo="scale-50 opacity-0"
            >
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                </ul>
              </div>
            </Transition>
          </div>
        </div>
        <Transition
          show={showMobileMenu}
          enter="transition ease-out duration-300 transform"
          enterFrom="scale-50 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="transition ease-in duration-200 transform"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-50 opacity-0"
        >
          <div className="fixed top-0 left-0 w-full h-full bg-white shadow-lg z-40 md:hidden">
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
              <div className="mt-6 flex flex-col items-center">
                <SearchIcon
                  onClick={handleSearchClick}
                  className="scale-150 cursor-pointer hover:text-gray-700 transition-colors"
                  aria-label="Search"
                />
                <Transition
                  show={showSearch}
                  enter="transition ease-out duration-300 transform"
                  enterFrom="scale-50 opacity-0"
                  enterTo="scale-100 opacity-100"
                  leave="transition ease-in duration-200 transform"
                  leaveFrom="scale-100 opacity-100"
                  leaveTo="scale-50 opacity-0"
                >
                  <div className="relative mt-2">
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
                </Transition>
              </div>
              <div className="mt-6 flex flex-col items-center">
                <HelpOutlineIcon
                  onClick={handleHelpClick}
                  className="scale-150 cursor-pointer hover:text-gray-700 transition-colors"
                  aria-label="Help"
                />
                <Transition
                  show={showHelpMenu}
                  enter="transition ease-out duration-300 transform"
                  enterFrom="scale-50 opacity-0"
                  enterTo="scale-100 opacity-100"
                  leave="transition ease-in duration-200 transform"
                  leaveFrom="scale-100 opacity-100"
                  leaveTo="scale-50 opacity-0"
                >
                  <div className="mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg">
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">FAQ</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact Support</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Documentation</li>
                    </ul>
                  </div>
                </Transition>
              </div>
              <div className="mt-6 flex flex-col items-center">
                <AccountCircleIcon
                  onClick={handleAccountClick}
                  className="scale-150 text-[#5C6BC0] cursor-pointer hover:text-blue-700 transition-colors"
                  aria-label="Account"
                />
                <Transition
                  show={showAccountMenu}
                  enter="transition ease-out duration-300 transform"
                  enterFrom="scale-50 opacity-0"
                  enterTo="scale-100 opacity-100"
                  leave="transition ease-in duration-200 transform"
                  leaveFrom="scale-100 opacity-100"
                  leaveTo="scale-50 opacity-0"
                >
                  <div className="mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg">
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                    </ul>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default Navbar;
