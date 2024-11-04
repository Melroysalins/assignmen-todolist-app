export const updateTaskInLocalStorage = (id, updatedTask, isCompleted) => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  if (tasks && tasks.length > 0) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task, // Keep the rest of the task properties
          task: updatedTask ?? task.task,
          isCompleted: isCompleted ?? task.isCompleted, // Update isCompleted if provided
        };
      }
      return task;
    });

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }
};
