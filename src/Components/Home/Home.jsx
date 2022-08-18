import Counter from "../Counter/Counter";
import Header from "../Header/Header";
import classes from "./Home.module.css"

const Home = () => {
    return ( 
        <div className= { classes.home }>
            <Header/>
            <Counter/>
        </div>
     );
}
 
export default Home;