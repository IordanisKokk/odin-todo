import { format } from 'date-fns'

class Task {
    constructor(title, description, dueDate, priority, notes){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.completed = false;
    }

    getRemainingDays(dueDate) {
        return dueDate - format(new Date().getTime(), 'yyyy/MM/dd')
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }

    formatDueDate() {
        return this.dueDate.toLocaleDateString();
    }

    updatePriority(newPriority) {
        this.priority = newPriority;
    }

    addNote(newNote) {
        this.notes += '\n' + newNote; 
    }

    serialize() {
        return JSON.stringify(this);
    }

}

export { Task }