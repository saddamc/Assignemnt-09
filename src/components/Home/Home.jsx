import { useEffect } from "react";
import HomesSlider from "../Banner/homeSlider/HomesSlider";
import Houses from "../Estate/Houses/Houses";


const Home = () => {
    useEffect(() => {
        document.title = `RAINBOW | HOME`;
    }, []);
    return (
        <div>
            <HomesSlider></HomesSlider>
            <Houses></Houses>


        </div>
    );
};

export default Home;