import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Popular from "./Popular/Popular";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss ! Home</title>

            </Helmet>
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