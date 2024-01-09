import React, {useState} from "react";

const AddTask = () => {
    const [val, setVal] = useState(0);
    const [tasks, setTasks] = useState([]);
    const Add = () => {
        const inputTitle = document.getElementById("task-title-input").value;
        const inputDescription = document.getElementById("task-description-input").value;
        const inputDueDate = document.getElementById("task-duedate").value;
        const inputCategory = document.getElementById("task-category").value;

        var taskObjectString = JSON.stringify({
            taskTitle: inputTitle,
            taskDescription: inputDescription,
            taskDate: inputDueDate,
            taskCategory: inputCategory,
        })
        const taskObject = JSON.parse(taskObjectString);

        setTasks([...tasks, taskObject]);
        // console.log(tasks);
    }
    return (
        <section className="addtask-section">
            <div className="container">
                <div className="row">
                    <div className="card col-8 offset-2" >
                        <div className="card-header bg-transparent w-100">
                            <h3 className="text-center">Task Details</h3>
                        </div>
                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                    <input type="text" name="" id="task-title-input" className="form-control" placeholder="Enter the Task"/>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" name="" id="task-description-input" className="form-control" placeholder="Enter the Task Description"/>
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="">Select Due Date for the Task</label>
                                    <input type="date" name="" id="task-duedate" className="form-control"/>
                                </div>
                                <div className="form-group mt-3">
                                    <select name="task-category" id="task-category" className="form-control">
                                        <option value="">Select Category</option>
                                        <option value="work">Work</option>
                                        <option value="hobby">Hobby</option>
                                    </select>
                                </div>
                                <div className="form-group mt-3">
                                    <button type="button" className="btn btn-primary col-2 offset-5" onClick={Add}>Add Task</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AddTask;