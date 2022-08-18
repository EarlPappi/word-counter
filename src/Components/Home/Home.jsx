import Counter from "../Counter/Counter";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import classes from "./Home.module.css"

const Home = () => {
    return ( 
        <div className= { classes.home }>
            <Header/>
            <Counter/>
            <Footer/>
        </div>
     );
}
 
export default Home;