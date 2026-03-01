import netflix_logo from "../assets/images/netflix.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const Hero = ({ children }) => {
    return (
        <div className="relative">
            <div className="w-full h-screen relative overflow-hidden">
                <iframe
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] min-w-[300vw] min-h-[300vh] md:w-[150vw] md:h-[150vh] max-w-none pointer-events-none"
                    src="https://www.youtube.com/embed/6Cmu3oUvOkA?si=uB0G3XwHpsWiDI4g&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=6Cmu3oUvOkA"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
            </div>
            {children}
            <div className="absolute left-4 md:left-8 lg:left-15 top-[50%] -translate-y-[50%] flex flex-col max-w-[90%] md:max-w-[80%] lg:max-w-125 text-white px-4">
                <span className="pl-1 w-[40%] md:w-[30%] lg:w-[30%] mb-2 md:mb-4">
                    <img
                        src={netflix_logo}
                        alt="netflix logo"
                        className="w-full h-auto"
                    />
                </span>
                <span className="uppercase font-montserrat font-extrabold text-white tracking-[0.1em] md:tracking-[0.2em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-4">
                    Manifest
                </span>
                <p className="tracking-wider text-sm md:text-base lg:text-lg [text-shadow:_0_0_5px_rgb(0,0,0,0.2)] mb-4 md:mb-6 line-clamp-3 md:line-clamp-none">
                    When a plane mysteriously lands years after takeoff, the
                    people onboard return to a world that has moved on without
                    them and face strange new realities.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <button className="bg-white rounded-md text-black px-4 md:px-5 lg:px-6 py-2 md:py-3 text-base md:text-lg lg:text-xl font-bold shadow-lg hover:bg-opacity-80 transition-all flex items-center justify-center gap-2">
                        <FontAwesomeIcon icon={faCaretRight} /> Play
                    </button>
                    <button className="bg-gray-800 rounded-md text-white px-4 md:px-5 lg:px-6 py-2 md:py-3 text-base md:text-lg lg:text-xl font-bold shadow-lg hover:bg-gray-700 transition-all flex items-center justify-center gap-2">
                        <FontAwesomeIcon icon={faCircleInfo} /> More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
