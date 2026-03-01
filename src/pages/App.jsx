import BoredomBusters from "../components/BoredomBusters";
import ContinueWatching from "../components/ContinueWatching";
import GoodWhile from "../components/GoodWhile";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import NextWatch from "../components/NextWatch";
import SuspenseSlider from "../components/SuspenseSlider";
import ThirtyLaughs from "../components/ThirtyLaughs";
import Footer from "../components/Footer";

const App = () => {
    return (
        <div>
            <Navigation />
            <Hero>
                <SuspenseSlider styles="text-white absolute bottom-4 left-4 md:left-8 lg:left-15 pr-0 right-0" />
            </Hero>
            <ContinueWatching />
            <NextWatch />
            <GoodWhile />
            <BoredomBusters />
            <ThirtyLaughs />
            <Footer />
        </div>
    );
};

export default App;
