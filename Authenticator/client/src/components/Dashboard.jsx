import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import CommonQuestions from './CommonQuestions';
import MyCarousel from './MyCarousel';
import {faq, carouselItems} from '../data';

function Dashboard() {
  return (
    <>
      <Navbar/>
      <MyCarousel options={carouselItems}/>
      <CommonQuestions faq={faq}/>
    </>
  );
}

export default Dashboard;