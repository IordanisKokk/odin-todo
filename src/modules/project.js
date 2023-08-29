import { Task } from './task.js'

class Project {
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task)
    }

    removeTask(task) {
        const index = this.tasks.indexOf(task);
        if(index !== -1){
            this.tasks.splice(index, 1)
        }
    }

    deleteProject() {
        this.tasks = [];
    }

    filterByPriority(priority) {
        const filteredTasks = this.tasks.filter((task) => task.priority === priority);
        return filteredTasks
    }

}

// Create a Project instance
const project = new Project('My Project', 'New Project');

const task1 = new Task(
    'Wash the dishes',
    'Wash the dishes, clean the counters etc.',
    new Date(2023, 10, 15),
    1,
    'Remember to use the new dish soap.'
  );
  
  const task2 = new Task(
    'Prepare for presentation',
    'Create slides, rehearse, and gather materials.',
    new Date(2023, 8, 10),
    2,
    'Check if the projector is working properly.'
  );
  
  const task3 = new Task(
    'Go to the gym',
    'Cardio workout and weightlifting session.',
    new Date(2023, 8, 5),
    3,
    'Bring a water bottle and towel.'
  );
  
  const task4 = new Task(
    'Read a book',
    'Read at least two chapters of the selected book.',
    new Date(2023, 9, 20),
    2,
    'Book title: "The Great Adventure".'
  );
  
  const task5 = new Task(
    'Buy groceries',
    'Get fruits, vegetables, milk, and pasta.',
    new Date(2023, 8, 8),
    2,
    'Don\'t forget to bring reusable bags.'
  );

  const task6 = new Task(
    'Buy sdfafsdasadf',
    'Get fruits, gdasdgafdgaf, milk, and pasta.',
    new Date(2023, 8, 8),
    1,
    'Don\'t sdfga to bring reusable bags.'
  );
  
  
project.addTask(task1);
project.addTask(task2);
project.addTask(task3);
project.addTask(task4);
project.addTask(task5);
project.addTask(task6);
  
project.removeTask(task1);

console.log(project.filterByPriority(1));
// console.log(project);

export { Project };