
      const inputTag = document.getElementById("add_task_tag");
      const taskslist = document.querySelector(".current_tasks");
      const completedtaskslit = document.getElementById("completed_task_list");
      const deletedtasklist = document.getElementById("deleted_task_list");

      let localstoragetaskslists =
        JSON.parse(localStorage.getItem("localstoragetaskslists")) || [];

      function loadTasks() {
        localstoragetaskslists.forEach(function (particulartask) {
          var taskarray = `<div class='task d-flex justify-content-between'><div><p id='task-name'>${particulartask}</p></div><div class='task-buttons'><button type='button' class='delete-task-btn btn btn-danger' onclick=deleteTask(this)>Delete Task</button><button type='button' class='ms-2 done-task-btn btn btn-success' onclick=doneTask(this)>Mark as Done</button></div></div>`;

          taskslist.insertAdjacentHTML("beforeend", taskarray);
        });
      }

      loadTasks();

      function addTask(button) {
        const inputValue = inputTag.value;
        localstoragetaskslists.push(inputValue);
        localStorage.setItem(
          "localstoragetaskslists",
          JSON.stringify(localstoragetaskslists)
        );

        inputTag.value = "";
        var latestTask = `<div class='task d-flex justify-content-between'><div><p id='task-name'>${inputValue}</p></div><div class='task-buttons'><button type='button' class='delete-task-btn btn btn-danger' onclick=deleteTask(this)>Delete Task</button><button type='button' class='ms-2 done-task-btn btn btn-success' onclick=doneTask(this)>Mark as Done</button></div></div>`;
        taskslist.insertAdjacentHTML("beforebegin", latestTask);
      }

      // function addTask() {
      //   const inputValue = inputTag.value;
      //   localstoragetaskslists.push(inputValue);
      //   localStorage.setItem(
      //     "localstoragetaskslists",
      //     JSON.stringify(localstoragetaskslists)
      //   );
      //   inputTag.value = " ";
      //   loadTasks();
      // }

      function deleteTask(button) {
        let taskvalue = document.getElementById("task-name");
        deletedtasklist.innerHTML += `<p class='tasks'>${taskvalue.innerHTML}</p>`;
        button.parentElement.parentElement.remove();
      }
      function doneTask(button) {
        let taskvalue = document.getElementById("task-name");
        completedtaskslit.innerHTML += `<p class='tasks'>${taskvalue.innerHTML}</p>`;
        button.parentElement.parentElement.remove();
      }

      function clearAll() {
        // var tasks = document.getElementsByClassName("tasks");
        // tasks.innerHTML = "";
        alert("hey");
      }

      //   let keyprompt = prompt("Enter the key you want");
      //   let valueprompt = prompt("Enter the value you want");

      //   localStorage.setItem(keyprompt, valueprompt);