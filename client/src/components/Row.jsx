import React, {useState,useEffect} from 'react'
import axios from '../axios.config.js'
import RowDetail from './RowDetail.jsx'
const baseUrl = 'https://image.tmdb.org/t/p/original'

function Row({title,fetchUrl}) {

      const [movies, setMovies] = useState([]);
      const [detail, setDetail] = useState(null);

      const handleClick = (movie) => {
          if(detail) {
              if(detail.id === movie.id){
                  setDetail(null)
              } else {
                setDetail(movie)
            }
          } else {
            setDetail(movie)
        }
      }
      useEffect(() => {
            async function fetchData() {
              const result = await axios.get(fetchUrl)
              setMovies(result.data.results)
            }
            fetchData()
          }, [fetchUrl])
          console.log(movies);
    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>
            <div className="row__posters">
                {movies.length > 0 && movies.map(movie => (<img
                    className="row__poster"
                    onClick={()=> handleClick(movie)}
                    key={movie.id}
                    src={`${baseUrl}${movie?.poster_path}`}
                    alt={movie.name}/>
                    
                    ))
}
            </div>
            {
            detail && <RowDetail movie={detail}/>
            }
        </div>
    )
}

export default Row
