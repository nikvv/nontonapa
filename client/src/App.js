import React from 'react';
import fetch from './requests.js'
import Row from './components/Row';
import 'normalize.css'
import Banner from './components/Banner.jsx';
import Footer from './components/Footer.jsx';

import './css/style.css'
function App() {
  return (
    <div className="app">
      {/* <h1 className="font-brand text-3xl">NONTONAPA</h1> */}
      <Banner fetchUrl={fetch.netflixOriginals} />
      <Row title='Netflix Originals' fetchUrl={fetch.netflixOriginals} />
      <Row title='Trending Movie' fetchUrl={fetch.trendingMovie} />
      <Row title='Trending TV' fetchUrl={fetch.trendingTv} />

      <Footer />

    </div>
  );
}


export default App;
