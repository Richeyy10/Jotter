import react, {useState} from "react";


function InputArea (props) {
    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
        
    }
    
    return (
        <div className = "form">
          <input onChange = {handleChange} value = {inputText} type = "text" />
          <button onClick = {() => {
            props.onClick(inputText);
            setInputText("");
          }}>
            <span>Add</span>
          </button>
        </div>
    )
};

export default InputArea;