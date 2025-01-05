import { useEffect } from "react";

const TasksItem = ({ task }) => {
    useEffect(() => {
        console.log("Component was mounted");

        return () => {
            console.log("I will unmount");
        };
    }, []);
    return (
        <>
            <h1>{task.description}</h1>
            <p>{task.isCompleted ? "Completa" : "Não completa "}</p>
        </>
    );
};

export default TasksItem;
