export const removeParticularTaskFromLocalStorage = (id) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Check if tasks exist and are in an array

  if (Array.isArray(tasks) && tasks.length > 0) {
    const updatedTasks = tasks.filter((task) => task?.id !== id);

    // Update localStorage with the new filtered tasks array

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }
};
