import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import kidsmain from '../images/kidsmain.png';
import kid1 from '../images/kid1.webp';
import kid2 from '../images/kid2.webp';
import kid3 from '../images/kid3.webp';
import kid4 from '../images/kid4.webp';
import kid5 from '../images/kid5.webp';
import kid6 from '../images/kid6.webp';
import kid7 from '../images/kid7.webp';
import kid8 from '../images/kid8.webp';
import kid9 from '../images/kid9.webp';
import kid10 from '../images/kid10.webp';
import kid11 from '../images/kid11.webp';
import kid12 from '../images/kid12.webp';
import { motion } from 'framer-motion';

const kidsData = [
  { src: kid1, title: 'For Kids app1' },
  { src: kid2, title: 'For Kids app2' },
  { src: kid3, title: 'For Kids app3' },
  { src: kid4, title: 'For Kids app4' },
  { src: kid5, title: 'For Kids app5' },
  { src: kid6, title: 'For Kids app6' },
  { src: kid7, title: 'For Kids app7' },
  { src: kid8, title: 'For Kids app8' },
  { src: kid9, title: 'For Kids app9' },
  { src: kid10, title: 'For Kids app10' },
  { src: kid11, title: 'For Kids app11' },
  { src: kid12, title: 'For Kids app12' }
];

const Kids = () => {
  return (
    <>
      <Navbar />
      <div className="kids py-40 px-6 md:px-12 lg:px-24 xl:px-56 flex flex-col items-center gap-12">
        <div className="kids-top text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={kidsmain} alt="Kids Main" className="" />
          </motion.div>
          <motion.h1
            className="text-4xl font-medium mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Приложения и игры, одобренные преподавателями
          </motion.h1>
          <motion.div
            className="flex flex-wrap gap-4 justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {['До 12 лет', 'До 5 лет', 'От 6 До 8 лет', 'От 9 До 12 лет'].map((text, index) => (
              <a
                key={index}
                href='/'
                className='px-4 py-2 border border-gray-400 rounded-2xl bg-gray-50 hover:text-[#056046] transition-all ease-in-out duration-200 cursor-pointer hover:bg-[#DDE9E6] text-center'
              >
                {text}
              </a>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="kids-bottom grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          {kidsData.map((kid, index) => (
            <div
              key={index}
              className="card flex flex-col items-center border-none rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={kid.src}
                alt={kid.title}
                className="w-full h-40 object-cover"
              />
              <h1 className='text-xl font-medium mt-2'>{kid.title}</h1>
            </div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default Kids;
