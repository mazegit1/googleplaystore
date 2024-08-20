import React from 'react';
import Navbar from '../components/Navbar';
import gamefirst from '../images/gamefirst.webp';
import gamesecond from '../images/gamesecond.webp';
import gamethird from '../images/gamethird.webp';
import gamefirstlogo from '../images/gamefirstlogo.webp';
import gamesecondlogo from '../images/gamesecondlogo.webp';
import gamethirdlogo from '../images/gamethirdlogo.webp';
import 'animate.css';
import Footer from '../components/Footer';

const Games = () => {
  return (
    <>
      <Navbar />
      <div className="games px-4 sm:px-6 md:px-8 lg:px-20 xl:px-40 py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="games-title text-center py-10 sm:py-12 md:py-16 animate__animated animate__fadeIn">
          <h1 className='text-3xl sm:text-4xl font-medium text-black'>
            Google Play Игры на ПК
          </h1>
          <p className='text-[#5F6368] text-lg sm:text-xl font-medium'>
            Играйте на большом экране
          </p>
        </div>
        <div className="games-cards transition-all ease-in-out duration-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { img: gamefirst, logo: gamefirstlogo, title: 'Rise of Kingdoms: Lost Crusade' },
            { img: gamesecond, logo: gamesecondlogo, title: 'Rise of Kingdoms: Lost Crusade' },
            { img: gamethird, logo: gamethirdlogo, title: 'Rise of Kingdoms: Lost Crusade' },
            { img: gamefirst, logo: gamefirstlogo, title: 'Rise of Kingdoms: Lost Crusade' },
            { img: gamesecond, logo: gamesecondlogo, title: 'Rise of Kingdoms: Lost Crusade' },
            { img: gamethird, logo: gamethirdlogo, title: 'Rise of Kingdoms: Lost Crusade' },
          ].map((game, index) => (
            <div key={index} className="game-card shadow-lg transition-all ease-in-out duration-200 rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeIn">
              <img src={game.img} alt={`Game ${index + 1}`} className="w-full h-auto" />
              <div className="wrapper p-4">
                <div className="wrapper-left flex items-center gap-4">
                  <img src={game.logo} alt={`Game ${index + 1} Logo`} className="w-12 h-12" />
                  <h1 className='text-lg sm:text-xl'>{game.title}</h1>
                </div>
                <div className="wrapper-right mt-2">
                  <h1 className='text-sm sm:text-base'>Information about the game:</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Games;
