import Task from "./Task";

function TaskList(props) {
    return (
        <div className="flex-col flex">
            {props.tasks.map((task) => (
                <div className="bg-white p-4 m-2 rounded-xl border-black border-2" key={task._id}>
                    <Task task = {task} deleteItem={props.deleteItem}/>
                </div>
            ))}
        </div>
    );
}

export default TaskList;