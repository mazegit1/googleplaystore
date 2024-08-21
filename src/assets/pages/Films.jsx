import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import film1 from '../images/film1.webp';
import film2 from '../images/film2.webp';
import film3 from '../images/film3.webp';
import film4 from '../images/film4.webp';
import film5 from '../images/film5.webp';
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';

const films = [
  { src: film1, title: 'Film Name', rating: '4.5', price: '2.00 $' },
  { src: film2, title: 'Film Name', rating: '4.5', price: '2.00 $' },
  { src: film3, title: 'Film Name', rating: '4.5', price: '2.00 $' },
  { src: film4, title: 'Film Name', rating: '4.5', price: '2.00 $' },
  { src: film5, title: 'Film Name', rating: '4.5', price: '2.00 $' }
];

const Films = () => {
  return (
    <>
      <Navbar />
      <div className="films py-40 px-6 md:px-12 lg:px-24 xl:px-56">
        <div className="films-top text-center mb-12">
          <h1 className="text-3xl font-medium mb-2">Топ продаж</h1>
          <p className="text-xl font-medium text-[#5f6376]">Самое популярное на Google TV</p>
        </div>
        <div className="films-bottom grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {films.map((film, index) => (
            <motion.div
              key={index}
              className="card border-none p-2 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={film.src} className="w-[200%] object-cover" alt={film.title} />
              <h1 className="text-2xl font-medium mt-2">{film.title}</h1>
              <div className="wrapper flex items-center gap-4 mt-2">
                <p className="text-gray-600 flex items-center gap-2">{film.rating} <StarIcon /></p>
                <p className="text-gray-600">{film.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Films;
