export class createTask {
  constructor(task, id) {
    this.task = task;
    this.id = id;
  }
  get create() {
    return {
      task: this.task,
      id: this.id,
      editing: false,
      done: false,
    };
  }
}

