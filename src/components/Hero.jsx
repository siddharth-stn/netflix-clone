const Hero = ({ children }) => {
  return (
    <div className="relative">
      <div className="w-full h-screen relative overflow-hidden">
        <iframe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] max-w-none pointer-events-none" src="https://www.youtube.com/embed/6Cmu3oUvOkA?si=uB0G3XwHpsWiDI4g&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=6Cmu3oUvOkA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
      {children}
    </div>
  )
}

export default Hero
