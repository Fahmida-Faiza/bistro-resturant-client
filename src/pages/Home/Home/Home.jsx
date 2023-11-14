import Banner from "../Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Popular from "./Popular/Popular";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <h2>this is home</h2>
            <Banner></Banner>
            <Category></Category>
            <Popular></Popular>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;