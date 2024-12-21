import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Cuisine from "./Cuisine";
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Popular />
            <Veggie />
            
        </div>
    )
}

export default Home;