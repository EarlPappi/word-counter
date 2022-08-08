import { useState } from "react";

const Counter = () => {
    const [userInput, setUserInput] = useState('');
    const handleCount = (e)=>{
        e.preventDefault();

        console.log(userInput.length);
    }

    return ( 
        <div>
            <form action="" onSubmit={handleCount}>
                <textarea name="" placeholder="Enter Text here" id="" cols="30" rows="10" onChange={(e)=>{
                    setUserInput(e.target.value)
                }}></textarea>
                <button>Count</button>
                <p>{ userInput.length } Characters</p>
                <p> { userInput.split(" ").filter(word => word !== "").length } words </p>
            </form>
        </div>
     );
}
 
export default Counter;