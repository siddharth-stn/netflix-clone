import ContinueWatching from "../components/ContinueWatching"
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"
import SuspenseSlider from "../components/SuspenseSlider"

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero>
        <SuspenseSlider styles="`text-white pl-15 absolute bottom-1 left-0 w-full" />
      </Hero>
      <ContinueWatching />
    </div>
  )
}

export default App
