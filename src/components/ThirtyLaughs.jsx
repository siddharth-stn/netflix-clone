import { useEffect, useState } from "react"
import Slider from "./Slider"
const API_URL = import.meta.env.VITE_TMDB_API_URL
import axios from "axios"

const ThirtyLaughs = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios(`${API_URL}&page=6`).
      then((response) => {
        const allShows = response.data.results
        setMovieData(allShows);
      }).
      catch(err => console.error(err));
  }, [])
  return (
    <>
      <Slider wrapperStyle="mt-10 w-full pl-15 text-white" sliderTitle="30-Minute Laughs" movieData={movieData} headingStyle="text-xl text-white" slideStyle="border border-red-500 transition-transform duration-300 hover:scale-105 cursor-pointer" imgStyle="mt-2 rounded-xl transition-transform duration-500 hover:scale-105" />
    </>
  )
}

export default ThirtyLaughs
