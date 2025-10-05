import "./Button.css";

// This function is no longer needed here since we moved it to App.js
// We'll keep the Button component simple
function Button(props) {
    // Regular function to handle click
    function handleClick() {
        console.log("Button clicked!");
        // Call the function passed from parent
        if (props.onButtonClick) {
            props.onButtonClick();
        }
    }

    return ( 
        <button className="btn" onClick={handleClick}> 
            LuckyDraw
        </button> 
    );
}

export default Button;