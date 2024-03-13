const IMG_PATH_URL = 'https://image.tmdb.org/t/p/original';

const MovieCard = ({movie}) => {

  


  return (
    <>
        <img src={IMG_PATH_URL+movie.poster_path} alt="img" 
        className='w-[100px] md:w-[200px] mx-4 my-10 rounded-lg hover:border-[4px] border-gray-400 
        transition-all duration-200 hover:scale-110 '/>
    </>
  )
}

export default MovieCard