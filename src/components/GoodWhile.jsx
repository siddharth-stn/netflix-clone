import { useEffect, useState } from "react";
import Slider from "./Slider";
const API_URL = import.meta.env.VITE_TMDB_API_URL;
import axios from "axios";

const GoodWhile = () => {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        axios(`${API_URL}&page=4`)
            .then((response) => {
                const allShows = response.data.results;
                setMovieData(allShows);
            })
            .catch((err) => console.error(err));
    }, []);
    return (
        <>
            <Slider
                wrapperStyle="mt-8 md:mt-10 w-full pl-4 md:pl-8 lg:pl-15 text-white"
                sliderTitle="Watch Good While"
                movieData={movieData}
                headingStyle="text-lg md:text-xl text-white"
                slideStyle="border border-red-500 transition-transform duration-300 hover:scale-105 cursor-pointer"
                imgStyle="mt-2 rounded-xl transition-transform duration-500 hover:scale-105 w-full h-auto"
            />
        </>
    );
};

export default GoodWhile;
