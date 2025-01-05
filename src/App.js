import { useRef, useState, useEffect } from "react";
import TasksItem from "./components/TaksItem";

const App = () => {
    const mounted = useRef(false);

    useEffect(() => {
        if (mounted.current === false) {
            mounted.current = true;
        } else {
            console.log("Component was updated");
        }
    });

    const [tasks, setTasks] = useState([
        { id: 1, description: "Estudar em programação", isCompleted: false },
        { id: 2, description: "Ler", isCompleted: true },
    ]);
    const handleCleanTasks = () => {
        setTasks([]);
    };
    return (
        <>
            {tasks.map((task) => (
                <TasksItem key={task.id} task={task} />
            ))}
            <button onClick={handleCleanTasks}> Limpar Tarefa</button>
        </>
    );
};

export default App;
