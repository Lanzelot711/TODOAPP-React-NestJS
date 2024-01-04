import React from 'react';
import { useState } from 'react';



function Form(props) {

    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDueDate, setNewTaskDueDate] = useState('');

    function onSubmit (e) {
        
        e.preventDefault()

        props.addItem(newTaskName, newTaskDueDate)

        setNewTaskName("")
        setNewTaskDueDate("")

    }

    return (
        <div className="flex items-center justify-center">
            <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="text1">
                        Task
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="text1"
                        type="text"
                        placeholder="Enter text 1"
                        value={newTaskName}
                        onChange={(e) => setNewTaskName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="text2">
                        Due Date
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="text2"
                        type="text"
                        placeholder="Enter text 2"
                        value={newTaskDueDate}
                        onChange={(e) => setNewTaskDueDate(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form