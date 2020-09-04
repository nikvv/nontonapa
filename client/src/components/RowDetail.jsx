import React from 'react'
import StarIcon from '@material-ui/icons/Star';
function RowDetail({movie}) {
      const baseUrl = 'https://image.tmdb.org/t/p/original'

      function truncate(str, n) {
            return str?.length > n ? str.substr(0,n-1) + "..." : str;
      }

      return (
            <div className="row__detail" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${baseUrl}/${movie?.backdrop_path})`}}>
                  <div className="row__detail__content">
                  <h2 className="row__detail__title">{movie?.name || movie?.title || movie?.original_name}</h2>
                  <p className="row__detail__description">{truncate(movie?.overview,190)}</p>
                  <p className="row__detail__vote">Popularity: {movie?.vote_average} <span className="row__detail__voteTotal"> ({movie?.vote_count} votes)</span></p>
                  </div>
            </div>
      )
}

export default RowDetail
