import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import gamefirst from '../images/gamefirst.webp';
import gamesecond from '../images/gamesecond.webp';
import gamethird from '../images/gamethird.webp';
import gamefirstlogo from '../images/gamefirstlogo.webp';
import gamesecondlogo from '../images/gamesecondlogo.webp';
import gamethirdlogo from '../images/gamethirdlogo.webp';
import Footer from '../components/Footer';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const Games = () => {
  return (
    <>
      <Navbar />
      <motion.div
        className="games px-4 sm:px-6 md:px-8 lg:px-20 xl:px-40 py-10 sm:py-12 md:py-16 lg:py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="games-title text-center py-10 sm:py-12 md:py-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-3xl sm:text-4xl font-medium text-black">
            Google Play Игры на ПК
          </h1>
          <p className="text-[#5F6368] text-lg sm:text-xl font-medium">
            Играйте на большом экране
          </p>
        </motion.div>

        <div className="games-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { img: gamefirst, logo: gamefirstlogo, title: 'Rise of Kingdoms: Lost Crusade' },
            { img: gamesecond, logo: gamesecondlogo, title: 'Rise of Kingdoms: Lost Crusade' },
            { img: gamethird, logo: gamethirdlogo, title: 'Rise of Kingdoms: Lost Crusade' },
            { img: gamefirst, logo: gamefirstlogo, title: 'Rise of Kingdoms: Lost Crusade' },
            { img: gamesecond, logo: gamesecondlogo, title: 'Rise of Kingdoms: Lost Crusade' },
            { img: gamethird, logo: gamethirdlogo, title: 'Rise of Kingdoms: Lost Crusade' },
          ].map((game, index) => (
            <motion.div
              key={index}
              className="game-card shadow-lg rounded-xl overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={game.img} alt={`Game ${index + 1}`} className="w-full h-auto" />
              <div className="wrapper p-4">
                <div className="wrapper-left flex items-center gap-4">
                  <img src={game.logo} alt={`Game ${index + 1} Logo`} className="w-12 h-12" />
                  <h1 className="text-lg sm:text-xl">{game.title}</h1>
                </div>
                <div className="wrapper-right mt-2">
                  <h1 className="text-sm sm:text-base">Information about the game:</h1>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Games;
