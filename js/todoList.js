export class TodoList {
    constructor() {
        this.listTask = []
    }

    addTodo(task) {
        this.listTask.push(task)
    }

    add = (task) => {
        console.log(task);
    }
}