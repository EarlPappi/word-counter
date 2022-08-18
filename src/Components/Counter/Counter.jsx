import { useState } from "react";
import Wrapper from "../Comps/Wrapper";
import classes from "./Counter.module.css"

const Counter = () => {
    const [userInput, setUserInput] = useState('');


    const handleCount = (e) => {
        e.preventDefault();
    }

    return (
        <div className={ classes.counterCon }>
            <Wrapper>
                <div className={ classes.counterHead }>
                    <div className={ classes.countIn }>
                        <h3>Characters</h3>
                        <h3>{userInput.length}</h3>
                    </div>

                    <div className={ classes.countIn }>
                        <h3>Words</h3>
                        <h3>{userInput.split(" ").filter(word => word !== "").length}</h3>
                    </div>

                    <div className={ classes.countIn }>
                        <h3>Characters <span>(excluding space)</span></h3>
                        <h3>{userInput.split(" ").join('').length}</h3>
                    </div>
                </div>

                <form action="" onSubmit={handleCount}>
                    <textarea name="" placeholder="Enter Text here" id="" cols="30" rows="10" onChange={(e) => {
                        setUserInput(e.target.value)
                    }}></textarea>
                </form>
            </Wrapper>
        </div>
    );
}

export default Counter;