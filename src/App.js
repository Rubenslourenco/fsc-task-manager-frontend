import { useState } from "react";
import TasksItem from "./components/TaksItem";

const App = () => {
    const [tasks, setTasks] = useState([
        { id: 1, description: "Estudar em programação", isCompleted: false },
        { id: 2, description: "Ler", isCompleted: true },
    ]);
    return (
        <>
            {tasks.map((task) => (
                <TasksItem key={task.id} task={task} />
            ))}
        </>
    );
};

export default App;
