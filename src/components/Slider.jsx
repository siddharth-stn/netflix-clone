import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slider = ({
    sliderTitle,
    wrapperStyle,
    movieData,
    headingStyle,
    sliderStyle,
    imgStyle,
}) => {
    return (
        <div className={wrapperStyle}>
            <h2 className={headingStyle}>{sliderTitle}</h2>
            <div>
                <Swiper
                    spaceBetween={2}
                    slidesPerView={1}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 2,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 2,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 2,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 2,
                        },
                        1280: {
                            slidesPerView: 6,
                            spaceBetween: 2,
                        },
                    }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {movieData.map((movie) => {
                        return (
                            <SwiperSlide key={movie.id} className={sliderStyle}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                    alt="movie-slide"
                                    className={imgStyle}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;
