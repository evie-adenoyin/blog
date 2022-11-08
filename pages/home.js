import React from 'react';
import News from '../components/news';
import CallToActionWithVideo from '../components/cta';
import Newsletter from '../components/newsletter';
import NewsPost from '../components/newsPost';
import Hero from '../components/hero';
import Testimony from '../components/testimonies';


export default function Home() {
 

  return (
    <div>
      <Hero />
      <News />
      <Hero />
      <CallToActionWithVideo />
      <NewsPost />
      {/* <Newsletter /> */}
      <Hero />
      <Testimony />
    </div>
   
  );
}