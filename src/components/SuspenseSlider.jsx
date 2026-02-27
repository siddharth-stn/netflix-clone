import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
const API_URL = import.meta.env.VITE_TMDB_API_URL
import axios from "axios"
import { useEffect, useState } from "react"


const SuspenseSlider = ({ styles = "" }) => {

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios(API_URL).
      then((response) => {
        const allShows = response.data.results;
        const suspenseShows = allShows.filter((show) => {
          return show.genre_ids && show.backdrop_path && (show.genre_ids.includes(9648) || show.genre_ids.includes(53));
        });
        setMovieData(suspenseShows);
      }).
      catch((err) => { console.error(err) });
    ;
  }, [])

  return (
    <div className={`group ${styles}`}>
      <h2 className="text-xl text-white ">Suspenseful TV Shows</h2>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={2}
        slidesPerView={6}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="[&_.swiper-button-next]:opacity-0 [&_.swiper-button-prev]:opacity-0 group-hover:[&_.swiper-button-next]:opacity-100 group-hover:[&_.swiper-button-prev]:opacity-100 [&_.swiper-button-next]:transition-opacity [&_.swiper-button-prev]:transition-opacity [&_.swiper-button-next]:text-white [&_.swiper-button-prev]:text-white"
      >
        {movieData.map((movie) => {
          return (
            <SwiperSlide key={movie.id} className="transition-transform duration-300 hover:scale-105 cursor-pointer">
              <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="movie-poster" className="w-full h-auto object-cover rounded-xl shadow-lg block" />
            </SwiperSlide >
          );
        })}
      </Swiper >
    </div >
  )
}

export default SuspenseSlider
