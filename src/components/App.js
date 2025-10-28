import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Add new task
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  // Delete a task
  function handleDeleteTask(deletedText) {
    const updatedTasks = tasks.filter((task) => task.text !== deletedText);
    setTasks(updatedTasks);
  }

  // Change category
  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  // Filtered tasks
  const displayedTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
     <NewTaskForm
  categories={CATEGORIES.filter((cat) => cat !== "All")}
  onTaskFormSubmit={handleAddTask}
/>

      <TaskList tasks={displayedTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
