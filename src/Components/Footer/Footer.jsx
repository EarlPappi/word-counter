import Wrapper from "../Comps/Wrapper";
import classes from "./Fotter.module.css"

const Footer = () => {
    return (
        <div className={ classes.footerCon }>
            <Wrapper>
                <p>Word Count<span>Earl</span> -  Count Words, Character and with a lttle maths, get the number of spaces.</p>

            </Wrapper>
        </div>
    );
}

export default Footer;
