import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import StarIcon from '@mui/icons-material/Star';
import program1 from '../images/program1.webp';
import program2 from '../images/program2.webp';
import program3 from '../images/program3.webp';
import program4 from '../images/program4.webp';
import program5 from '../images/program5.webp';
import program6 from '../images/program6.webp';
import program7 from '../images/program7.webp';
import program8 from '../images/program8.webp';
import program9 from '../images/program9.webp';
import program10 from '../images/program10.webp';
import program11 from '../images/program11.webp';
import program12 from '../images/program12.webp';
import program13 from '../images/program13.webp';
import program14 from '../images/program14.webp';
import program15 from '../images/program15.webp';
import program16 from '../images/program16.webp';
import program17 from '../images/program17.webp';
import program18 from '../images/program18.webp';
import program19 from '../images/program19.webp';
import program20 from '../images/program20.webp';
import program21 from '../images/program21.webp';
import program22 from '../images/program22.webp';
import program23 from '../images/program23.webp';
import program24 from '../images/program24.webp';
import program25 from '../images/program25.webp';
import program26 from '../images/program26.webp';
import Footer from '../components/Footer';

const programsData = [
  { id: 1, src: program1, name: 'WhatsApp Messenger', rating: 4.3 },
  { id: 2, src: program2, name: 'TikTok Lite', rating: 2.5 },
  { id: 3, src: program3, name: 'Telegram', rating: 4.6 },
  { id: 4, src: program4, name: 'В Контакте', rating: 4.5 },
  { id: 5, src: program5, name: 'Steam', rating: 3.6 },
  { id: 6, src: program6, name: 'Twitch', rating: 4.4 },
  { id: 7, src: program7, name: 'Трекер : Привычек', rating: 4.9 },
  { id: 8, src: program8, name: 'Instagram', rating: 4.2 },
  { id: 9, src: program9, name: 'Steam', rating: 4.9 },
  { id: 10, src: program10, name: 'Twitch', rating: 4.9 },
  { id: 11, src: program11, name: 'Трекер : Привычек', rating: 4.9 },
  { id: 12, src: program12, name: 'Карты', rating: 4.9 },
  { id: 13, src: program13, name: 'Premier League', rating: 4.9 },
  { id: 14, src: program14, name: 'Kinopoisk Ru', rating: 4.9 },
  { id: 15, src: program15, name: 'Adobe LightRoom', rating: 4.9 },
  { id: 16, src: program16, name: 'Soundclock', rating: 4.9 },
  { id: 17, src: program17, name: 'Instagram', rating: 4.9 },
  { id: 18, src: program18, name: 'Snapchat', rating: 4.9 },
  { id: 19, src: program19, name: 'Plato Fun', rating: 4.9 },
  { id: 20, src: program20, name: 'Samsung Internet', rating: 4.9 },
  { id: 21, src: program21, name: 'Telegram X', rating: 4.9 },
  { id: 22, src: program22, name: 'Brave - Web Browser', rating: 4.9 },
  { id: 23, src: program23, name: 'Brave - Web Browser', rating: 4.9 },
  { id: 24, src: program24, name: 'Opera - Web Browser', rating: 4.9 },
  { id: 25, src: program25, name: 'Tor - Web Browser', rating: 4.9 },
  { id: 26, src: program26, name: 'Yandex - Web Browser', rating: 4.9 },
];

const Programs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredPrograms = programsData.filter(program =>
    program.name.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <Navbar />
      <motion.div
        className="programs py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="programs-title py-8 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium">
            На основе недавних действий
          </h1>
        </motion.div>
        <div className="relative items-center justify-center flex">
          <motion.input
            type="search"
            placeholder="Search..."
            className="border border-black shadow-lg px-6 text-2xl py-2 rounded-lg outline-none w-96 md:w-64"
            value={searchQuery}
            onChange={handleSearchChange}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>

        <motion.div
          className="centering flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="programs-cards grid items-center xl:ml-0 md:ml-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map(program => (
                <motion.div
                  key={program.id}
                  className="program-card shadow-lg p-4 w-fit flex flex-col items-start gap-4 bg-white rounded-xl transition-all ease-in-out duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: program.id * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={program.src} className="rounded-lg overflow-hidden" alt={program.name} />
                  <h1 className="text-lg sm:text-xl md:text-2xl">{program.name}</h1>
                  <div className="wrapper flex items-center gap-2">
                    <p className="text-base sm:text-lg md:text-xl">{program.rating}</p>
                    <StarIcon />
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-500">No results found</p>
            )}
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Programs;
