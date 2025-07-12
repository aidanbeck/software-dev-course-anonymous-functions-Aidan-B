/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

const todos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
  ];
  
  // ============================================
  // 🔍 Tasks
  // ============================================
  
  /*
  🔹 Task 1: Filter Incomplete Tasks
  
  Step-by-Step:
  1. Use the `filter()` method on the todos array.
  2. Use an anonymous function as the callback.
  3. Return only the tasks that are not completed.
  */
  let incomplete = todos.filter( (task) => task.completed == false );
  
  /*
  🔹 Task 2: Sort Tasks by Priority
  
  Step-by-Step:
  1. Use the `sort()` method on the todos array.
  2. Use an anonymous function as the comparison function.
  3. Sort tasks in ascending order of priority (1 = highest).
  */
  let priority = todos.sort( (a, b) => a.priority - b.priority );
  // !!! I know how to use this but am interested in *exactly* how this works under the hood.
  // Though I realize it is probably a built in function written in native code.
  // Still, I want to experiment with it when I have more time.
  
  /*
  🔹 Task 3: Mark All Tasks as Completed
  
  Step-by-Step:
  1. Use the `map()` method to return a new array.
  2. Use an anonymous function to modify each object.
  3. Change the `completed` property to `true` for every task.
  */
  let allCompleted = todos.map((task) => {
     // I am reconstructing the object here because I do not want to modify the original array.    
      return {
        task: task.task, // welcome to hell <3
        completed: true,
        priority: task.priority
      }
  });
  
  
  /*
  🔹 Task 4: Combine Filters
  
  Step-by-Step:
  1. First, filter the todos to get only incomplete tasks.
  2. Then, sort the filtered results by priority using `sort()`.
  3. Use method chaining to perform both steps together.
  */
 let incompletesPrioritized = todos.filter((task) => task.completed == false).sort((a, b) => a.priority - b.priority);
 //This is right, but the array is already sorted when this line recieves it. Why? Is the "priorities" line affecting "todos" as well as returning a new array?
 //Hopefully I will find an answer in the solution assignment.
  
  
  // ============================================
  // 🧪 Console Test Your Work
  // ============================================
  
  console.log("Incomplete Tasks:", incomplete);
  console.log("Sorted by Priority:", priority);
  console.log("All Tasks Completed:", allCompleted);
  console.log("Sorted Incomplete Tasks:", incompletesPrioritized);