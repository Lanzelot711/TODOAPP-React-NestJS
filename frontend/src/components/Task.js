


function Task(props) {


    const handleDelete = (id) => {
        // Add your delete logic here
        console.log("test")
        props.deleteItem(id)
    };

    return (
        <div className="bg-white p-4 rounded-md m-2 flex flex-row content-between items-between justify-between" >
            <div className="w-1/2 flex flex-row content-between items-between justify-between ">
                <div style={{ color: "fuchsia" }}>Taskname:<br /> {props.task.name}</div>
                <div>Due Date: <br />{props.task.datum}</div>
            </div>
            <div className="w-50">
                <button onClick={() => handleDelete(props.task._id)}>X</button>
            </div>
        </div>
    );
}

export default Task;