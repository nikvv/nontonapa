const API_KEY = "6bcc8102ee6f87bfe40a3e24305df824"

const requests = {
      trendingMovie: `/trending/movie/week?api_key=${API_KEY}`,
      trendingTv: `/trending/tv/week?api_key=${API_KEY}`,
      netflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`

}

export default requests;