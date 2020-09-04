import React from 'react';
import fetch from './requests.js'
import 'normalize.css'
import Row from './components/Row';
import Banner from './components/Banner.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx'

import './css/style.css'
function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner fetchUrl={fetch.netflixOriginals} />

      <Row title='Netflix Originals' fetchUrl={fetch.netflixOriginals} />
      <Row title='Trending Movie' fetchUrl={fetch.trendingMovie} />
      <Row title='Trending TV' fetchUrl={fetch.trendingTv} />

      <Footer />

    </div>
  );
}


export default App;
