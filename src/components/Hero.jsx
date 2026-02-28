import netflix_logo from "../assets/images/netflix.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const Hero = ({ children }) => {
  return (
    <div className="relative">
      <div className="w-full h-screen relative overflow-hidden">
        <iframe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] max-w-none pointer-events-none" src="https://www.youtube.com/embed/6Cmu3oUvOkA?si=uB0G3XwHpsWiDI4g&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=6Cmu3oUvOkA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
      {children}
      <div className="absolute left-15 top-[50%] -translate-y-[50%] flex flex-col max-w-125 text-white">
        <span className="pl-1 w-[30%]">
          <img src={netflix_logo} alt="netflix logo" />
        </span>
        <span className="uppercase font-montserrat font-extrabold text-white tracking-[0.2em] text-6xl">Manifest</span>
        <p className="tracking-widest [text-shadow:_0_0_5px_rgb(0,0,0,0.2)]">When a plane mysteriously lands years after takeoff, the people onboard return to a world that has moved on without them and face strange new realities.
        </p>
        <div className="flex gap-2 mt-2">
          <button className="bg-white rounded-md text-black pl-5 pr-6 py-2 text-xl font-bold shadow-lg"><FontAwesomeIcon icon={faCaretRight} />Play</button>
          <button className="bg-gray-800 rounded-md text-white pl-6 pr-7 py-2 text-xl font-bold shadow-lg"><FontAwesomeIcon icon={faCircleInfo} /> More Info</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
