import React, {useState,useEffect} from 'react'
import axios from '../axios.config.js'
const baseUrl = 'https://image.tmdb.org/t/p/original'

function Banner({fetchUrl}) {
    const [movie,setMovie] = useState({})
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(fetchUrl)
            setMovie(result.data.results[Math.floor(Math.random() * result.data.results.length)])
        }
        fetchData()
    }, [fetchUrl])

    console.log(movie);

    function truncate(str, n) {
          return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }
    return (
          
        <header
            className="banner"
            style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${baseUrl}/${movie?.backdrop_path})`}}>
            <div className="banner__contents">
                  <h1 className="banner__title">{movie?.name || movie?.title || movie?.original_name}</h1>
                  <p className="banner__description">{truncate(movie?.overview,190)}</p>
                  </div>
                  <div className="banner--fade"></div>
        </header>
    )
}

export default Banner
