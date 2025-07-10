// Create your interfaces and enum below:
interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: string;
}
enum Priority {
    Low = "Low",
    Medium = "Medium",
    High = "High"
}
interface TaskPriority extends Task {
    priority: Priority;
}

    // Create your task below:
const task: TaskPriority = {
    id: "1",
    title: "complete TypeScript exercise",
    description: "Implement interfaces and enums in TypeScript",
    dueDate: "2025-07-07",
    priority: Priority.High
}
// ONCE DONE, UNCOMMENT THE LINE BELOW AND RUN THE FILE
console.log(task);