import react, {useState} from "react";


function ToDoItem(props) {
    const [isDone, setIsDone] = useState(false);

    function StrikeThrough() {
        setIsDone(prevValue => {
            return !prevValue;
        })
    }

    return <div onClick = {() => {
        props.onChecked(props.id);
    }}>
        <li style = {{textDecoration: isDone ? "line-through" : "none"}}>{props.text}</li>
    </div>
}

export default ToDoItem;