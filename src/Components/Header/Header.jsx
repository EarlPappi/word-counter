import Wrapper from "../Comps/Wrapper";
import classes from "./Header.module.css"

const Header = () => {
    return ( 
        <header className={ classes.headerCon }>
            <Wrapper>
                <h1>Word Count<span>Earl</span></h1>
            </Wrapper>
        </header>
     );
}
 
export default Header;