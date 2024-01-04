import { useEffect, useState } from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
    console.log(tasksFromServer)
  }

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
      console.log(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:3333/todo/')
    const data = await res.json()

    return data
  }

  async function addItem(name, dueDate) {
    const isNameExists = tasks.some((task) => task.name === name);

    if (!isNameExists) {
      const task = {
        name: name,
        datum: dueDate,
      };

      // Send POST request to localhost:3333/addItem
      const res = await fetch('http://localhost:3333/todo/addItem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      })
      const data = await res.json()

      getTasks()
    } else {
      console.log('Name already exists in tasks.');
      // Handle the case when the name already exists in tasks
      // For example, you can show an error message to the user
    }
  }

  async function deleteItem(id) {
    try {
      // Add your delete logic here

      const url = 'http://localhost:3333/todo/deleteItem/' + id;

      const res = await fetch(url, {
        method: 'POST',
      });

      const data = await res.json();

      getTasks();
    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  }

  return (
    <div className="App">
      <div className="flex flex-col justify-center content-center items-center">
        <div>
          <div className="flex flex-col">
            <Form addItem={addItem} />
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <TaskList tasks={tasks} deleteItem={deleteItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
