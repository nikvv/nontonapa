import React, {useState,useEffect} from 'react'
import axios from '../axios.config.js'
const baseUrl = 'https://image.tmdb.org/t/p/original'

function Row({title,fetchUrl}) {

      const [movies, setMovies] = useState([])
      useEffect(() => {
            async function fetchData() {
              const result = await axios.get(fetchUrl)
              setMovies(result.data.results)
            }
            fetchData()
          }, [fetchUrl])
    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>
            <div className="row__posters">
                {movies.length > 0 && movies.map(movie => (<img
                    className="row__poster "
                    key={movie.id}
                    src={`${baseUrl}${movie?.poster_path}`}
                    alt={movie.name}/>))
}
            </div>
        </div>
    )
}

export default Row
