import { useState } from "react";

const Counter = () => {
    const [userInput, setUserInput] = useState('');
    console.log(userInput.split(" "))
    console.log(userInput.split(" ").join('.'))
    console.log(userInput.split(" ").join('').length)


    const handleCount = (e)=>{
        e.preventDefault();
// ~
        console.log(userInput.length);
    }

    return ( 
        <div>
            <form action="" onSubmit={handleCount}>
                <textarea name="" placeholder="Enter Text here" id="" cols="30" rows="10" onChange={(e)=>{
                    setUserInput(e.target.value)
                }}></textarea>
                <button>Count</button>
                <p>{ userInput.length } Characters (Including Space)</p>
                <p>{ userInput.split(" ").join('').length } Characters (Excluding Space)</p>
                <p> { userInput.split(" ").filter(word => word !== "").length } words </p>
            </form>
        </div>
     );
}
 
export default Counter;