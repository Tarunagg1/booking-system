import React from 'react';
import Featured from '../../components/featured/Featured';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/maillist/MailList';
import Navbar from '../../components/Navbar/Navbar';
import PropertyList from '../../components/propertieslist/PropertyList';
import './home.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by properties type</h1>
          <PropertyList />
          <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}
