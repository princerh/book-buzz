import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Books from "./Books";
import "./Nav.css"
  
const Home = () => {


    return (
        <div className="space-y-9">
            <Helmet>
                <title>Book Buzz | Home</title>
            </Helmet>
            <Banner></Banner>
            <Books></Books>
        </div>  
    );
};

export default Home;